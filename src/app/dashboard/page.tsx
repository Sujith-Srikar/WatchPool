"use client";
import { useSession } from "next-auth/react";
import StreamView from "@/app/components/StreamView";

export default function Component() {
  const { data: session, status } = useSession(); // Destructure session and status

  // Handle loading state properly
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  // If session is undefined or user is not logged in
  if (!session || !session.user?.id) {
    return <h1>Please Log in....</h1>;
  }

  // Render the StreamView when the session is valid
  return <StreamView creatorId={session.user.id} playVideo={true} />;
}

export const dynamic = "auto";