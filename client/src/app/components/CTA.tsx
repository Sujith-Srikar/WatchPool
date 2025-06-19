import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimationContainer from "@/components/globals/animation-container";
import Wrapper from "@/components/globals/wrapper";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";

const HIGHLIGHTS = [
  {
    icon: "/icons/shield.svg",
    label: "Audience-Driven Content",
  },
  {
    icon: "/icons/magicpen.svg",
    label: "Real-Time Voting System",
  },
  {
    icon: "/icons/clock.svg",
    label: "100% Free to Use",
  },
];

const CTA = () => {
  return (
    <Wrapper className="pt-20 lg:pt-32">
      <div className="z-0 relative flex flex-col items-center gap-4 py-20 lg:py-32 overflow-hidden text-center">
        <div className="bottom-0 z-10 absolute inset-x-0 bg-gradient-to-t from-[#0C0A09] w-full h-1/2"></div>

        <AnimationContainer
          animation="scaleUp"
          delay={0.2}
          className="mx-auto w-full"
        >
          <div className="-top-1/2 absolute inset-x-0 bg-[#3ac06be2] blur-[4rem] lg:blur-[10rem] mx-auto rounded-full size-1/2"></div>
        </AnimationContainer>

        <AnimationContainer animation="scaleUp" delay={0.3}>
          <div className="top-0 absolute inset-x-0 bg-gradient-to-r from-foreground/0 via-foreground/50 to-foreground/0 mx-auto w-4/5 h-px"></div>
        </AnimationContainer>

        <div className="z-30 flex flex-col justify-center items-center w-full">
          {/* <AnimationContainer animation="fadeUp" delay={0.3}>
            <SectionBadge title="Join Us" />
          </AnimationContainer> */}

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <h2 className="bg-clip-text bg-gradient-to-b from-white to-neutral-400 font-medium text-transparent text-3xl md:text-5xl lg:text-6xl">
              Let Your Audience <br /> Direct The Show{" "}
              <span className="ml-2 font-subheading italic">finally.</span>
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.5}>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
              Your viewers have opinions. So many opinions. Channel that energy
              into something useful and let them vote on what plays next. It's
              democracy, but for your content queue.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <div className="flex items-center mt-4">
              <div className="flex md:flex-row flex-wrap justify-center items-center gap-4 bg-neutral-900 px-4 py-2.5 rounded-full">
                {HIGHLIGHTS.map((item, index) => (
                  <AnimationContainer
                    key={index}
                    animation="fadeRight"
                    delay={0.7 + index * 0.1}
                  >
                    <div className="flex md:last:flex items-center gap-2">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={1024}
                        height={1024}
                        className="size-5 text-primary"
                      />
                      <span className="max-md:hidden text-white text-sm">
                        {item.label}
                      </span>
                    </div>
                  </AnimationContainer>
                ))}
              </div>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={1}>
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-500 mt-6"
              >
                Get Started
                <ArrowRightIcon className="ml-2 size-4" />
              </Button>
            </Link>
          </AnimationContainer>
        </div>
      </div>
    </Wrapper>
  );
};

export default CTA;
