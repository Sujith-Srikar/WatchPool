import { prismaClient } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import axios from "axios";
import { YT_REGEX } from "@/lib/utils";
import { getServerSession } from "next-auth";

const CreateStreamSchema = z.object({
  creatorId: z.string(),
  url: z.string(),
});

const MAX_QUEUE_LEN = 20;

export async function POST(req: NextRequest) {
  try {
    const data = CreateStreamSchema.parse(await req.json());
    const isYt = data.url.match(YT_REGEX);
    if (!isYt) {
      return NextResponse.json(
        {
          message: "Wrong URL format",
        },
        {
          status: 411,
        }
      );
    }

    const extractedId = data.url.split("?v=")[1];
    const res = await axios.get(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${extractedId}&format=json`
    );
    console.log("YouTube API response:", JSON.stringify(res.data, null, 2));

    const existingActiveStream = await prismaClient.stream.count({
      where: {
        userId: data.creatorId,
      },
    });
    if (existingActiveStream > MAX_QUEUE_LEN) {
      return NextResponse.json(
        {
          message: "Already at limit",
        },
        {
          status: 411,
        }
      );
    }

    const stream = await prismaClient.stream.create({
      data: {
        userId: data.creatorId,
        url: data.url,
        extractedId,
        type: "Youtube",
        title: res.data.title ?? "Cant find video",
        smallImg: `https://img.youtube.com/vi/${extractedId}/mqdefault.jpg`,
        bigImg: `https://img.youtube.com/vi/${extractedId}/maxresdefault.jpg`,
      },
    });

    return NextResponse.json({
      ...stream,
      hasUpvoted: false,
      upvotes: 0,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        message: `Error while adding a stream, ${e}`,
      },
      {
        status: 411,
      }
    );
  }
}

export async function GET(req: NextRequest) {
  const creatorId = req.nextUrl.searchParams.get("creatorId");
  const session = await getServerSession();
  // TODO: You can get rid of the db call here
  const user = await prismaClient.user.findFirst({
    where: {
      email: session?.user?.email ?? "",
    },
  });

  if (!user) {
    return NextResponse.json(
      {
        message: "Unauthenticated",
      },
      {
        status: 403,
      }
    );
  }

  if (!creatorId) {
    return NextResponse.json(
      {
        message: "Error",
      },
      {
        status: 411,
      }
    );
  }

  const [streams, activeStream] = await Promise.all([
    await prismaClient.stream.findMany({
      where: {
        userId: creatorId,
        played: false,
      },
      include: {
        _count: {
          select: {
            upvotes: true,
          },
        },
        upvotes: {
          where: {
            userId: user.id,
          },
        },
      },
    }),
    prismaClient.currentStream.findFirst({
      where: {
        userId: creatorId,
      },
      include: {
        stream: true,
      },
    }),
  ]);

  return NextResponse.json({
    streams: streams.map(({ _count, ...rest }) => ({
      ...rest,
      upvotes: _count.upvotes,
      haveUpvoted: rest.upvotes.length ? true : false,
    })),
    activeStream,
  });
}