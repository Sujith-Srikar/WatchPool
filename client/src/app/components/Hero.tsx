import React from "react";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import AnimationContainer from "@/components/globals/animation-container";
import Image from "next/image";

const Hero = () => {

  const session = useSession();
  const isUserLoggedIn = session.data?.user;

  const handleButtonClick = () => {
      if (isUserLoggedIn) {
        signOut({ callbackUrl: "/" });
      } else {
        signIn("google", { callbackUrl: "/dashboard" });
      }
    };
  return (
    <main className="flex-1 pt-32 pb-2 md:pt-44 md:pb-12 relative">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, #4ade80 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-center my-4">
          <AnimationContainer animation="fadeUp" delay={0.4}>
            <p className="px-3 pl-1 py-2 bg-stone-900 border border-stone-600 rounded-full text-white text-xs">
              <span className="px-2 mr-1 bg-green-600 py-1 border rounded-full text-white">
                new
              </span>{" "}
              Democracy for your content queue
            </p>
          </AnimationContainer>
        </div>
        <div className="flex flex-col items-center space-y-8 text-center mb-10">
          <div className="space-y-4">
            <AnimationContainer animation="fadeUp" delay={0.5}>
              <h1 className="text-2xl text-center font-bold tracking-tighter text-white md:text-5xl lg:text-6xl/none">
                Content Curation,
                <br />
                <span className="bg-clip-text bg-gradient-to-r from-green-400 to-green-600 text-transparent">
                  Crowd
                </span>
                <span className="ml-2 font-subheading italic text-white">
                  Powered
                </span>
              </h1>
            </AnimationContainer>
            <AnimationContainer animation="fadeUp" delay={0.6}>
              <p className="mx-auto text-center max-w-[700px] text-gray-400 md:text-xl text-sm">
                Why argue over what to watch next? Create a room, share the
                link,
                <br className="hidden md:block" /> and let your viewers battle
                it out with their votes.
              </p>
            </AnimationContainer>
          </div>
          <AnimationContainer animation="fadeUp" delay={0.7}>
            <div className="space-x-4">
              <Button
                className="bg-green-600 hover:bg-green-500 rounded-full"
                onClick={handleButtonClick}
              >
                Get Started
              </Button>
              <Button
                variant="secondary"
                className="rounded-full bg-transparent text-white border border-white-2"
              >
                Learn More
              </Button>
            </div>
          </AnimationContainer>
        </div>
      </div>

      {/* Image Section - With visible border */}
      <AnimationContainer animation="fadeUp" delay={0.8}>
        <div className="mt-8 sm:mt-10 md:mt-12 mx-auto w-[90%] sm:w-[85%] md:w-[85%] lg:max-w-6xl px-2 sm:px-4 relative z-10">
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-transparent">
            <Image
              src="/hero.png"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, (max-width: 1024px) 80vw, 1024px"
              style={{
                objectFit: "contain", // Changed from "cover" to "contain"
                objectPosition: "center",
              }}
              className="shadow-lg" // Removed border as it's part of the image
              alt="Dashboard preview"
              priority
            />
          </div>
        </div>
      </AnimationContainer>
    </main>
  );
};

export default Hero;
