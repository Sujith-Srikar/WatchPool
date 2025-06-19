import { Features } from "@/config/features";
import { cn } from "@/lib/utils";
import React from "react";
import AnimationContainer from "@/components/globals/animation-container";
import Wrapper from "@/components/globals/wrapper";

const FeaturesSection = () => {
  return (
    <Wrapper className="relative py-20 lg:py-32">
      <div className="flex flex-col items-center gap-4 text-center">
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="bg-clip-text bg-gradient-to-b from-[#ffffff] to-neutral-400 font-medium text-transparent text-2xl md:text-4xl lg:text-5xl !leading-tight">
            Because Your Friend&apos;s
            <br />
            Taste in Videos is
            <span className="ml-2 font-subheading italic">Questionable?!</span>
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.4}>
          <p className="mx-auto max-w-2xl text-muted-foreground text-sm md:text-base lg:text-lg">
            Let democracy decide if that cat video deserves to play next. Create
            rooms, share links, and let the most deserving content rise to the
            top.
          </p>
        </AnimationContainer>
      </div>

      <div className="relative pt-10">
        {/* Grid lines - Fixed visibility */}
        <div className="absolute inset-0 z-10">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 853 479"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M1 238.5C0.723858 238.5 0.5 238.724 0.5 239C0.5 239.276 0.723858 239.5 1 239.5V238.5ZM1 239.5H427V238.5H1V239.5Z"
              fill="url(#paint0_linear_715_148)"
            />
            <path
              d="M427 238.5C426.724 238.5 426.5 238.724 426.5 239C426.5 239.276 426.724 239.5 427 239.5V238.5ZM427 239.5H853V238.5H427V239.5Z"
              fill="url(#paint1_linear_715_148)"
            />
            <path
              d="M426.5 239C426.5 239.276 426.724 239.5 427 239.5C427.276 239.5 427.5 239.276 427.5 239L426.5 239ZM426.5 2.18557e-08L426.5 239L427.5 239L427.5 -2.18557e-08L426.5 2.18557e-08Z"
              fill="url(#paint2_linear_715_148)"
            />
            <path
              d="M426.5 478C426.5 478.276 426.724 478.5 427 478.5C427.276 478.5 427.5 478.276 427.5 478L426.5 478ZM426.5 239L426.5 478L427.5 478L427.5 239L426.5 239Z"
              fill="url(#paint3_linear_715_148)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_715_148"
                x1="1"
                y1="239.5"
                x2="427"
                y2="239.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2A2625" stopOpacity="0" />
                <stop offset="0.355" stopColor="#2A2625" />
                <stop offset="0.705" stopColor="#2A2625" />
                <stop offset="1" stopColor="#2A2625" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_715_148"
                x1="427"
                y1="239.5"
                x2="853"
                y2="239.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2A2625" stopOpacity="0" />
                <stop offset="0.355" stopColor="#2A2625" />
                <stop offset="0.705" stopColor="#2A2625" />
                <stop offset="1" stopColor="#2A2625" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_715_148"
                x1="426.5"
                y1="2.18557e-08"
                x2="426.5"
                y2="239"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2A2625" stopOpacity="0" />
                <stop offset="0.355" stopColor="#2A2625" />
                <stop offset="0.705" stopColor="#2A2625" />
                <stop offset="1" stopColor="#2A2625" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_715_148"
                x1="426.5"
                y1="239"
                x2="426.5"
                y2="478"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2A2625" stopOpacity="0" />
                <stop offset="0.355" stopColor="#2A2625" />
                <stop offset="0.705" stopColor="#2A2625" />
                <stop offset="1" stopColor="#2A2625" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="z-20 relative grid grid-cols-1 md:grid-cols-2">
          {Features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center p-2 md:p-16",
                index % 2 === 0 ? "justify-end" : "justify-start"
              )}
            >
              <AnimationContainer
                animation={index % 2 === 0 ? "fadeRight" : "fadeLeft"}
                delay={0.2 * (index + 1)}
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex justify-center items-center bg-neutral-900 rounded-lg lg:rounded-2xl size-12 lg:size-16">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="size-8 lg:size-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-white text-lg md:text-xl">
                      {feature.title}
                    </h3>
                    <p className="max-w-[250px] text-muted-foreground text-xs md:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimationContainer>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default FeaturesSection;
