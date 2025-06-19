"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Logo from "../../../public/Logo";
import Link from "next/link";
import AnimationContainer from "@/components/globals/animation-container";

export function Appbar() {
  const session = useSession();
  const isUserLoggedIn = session.data?.user;
  const buttonTitle = isUserLoggedIn ? "Logout" : "Login";

  const handleButtonClick = () => {
    if (isUserLoggedIn) {
      signOut({ callbackUrl: "/" });
    } else {
      signIn("google", { callbackUrl: "/dashboard" });
    }
  };

  return (
    <div className="fixed px-5 py-4 md:px-10 xl:px-20 z-50 top-0 backdrop-blur-[12px] w-full flex justify-between lg:px-44">
      <AnimationContainer animation="fadeUp" delay={0.3}>
        <Link
          href="/"
          className="flex items-center gap-2 justify-center text-white text-lg font-bold"
        >
          <Logo />
          <span>WatchPool</span>
        </Link>
      </AnimationContainer>
      <AnimationContainer animation="fadeUp" delay={0.4}>
        <div className="flex items-center gap-2">
          <Button onClick={handleButtonClick}>{buttonTitle}</Button>
        </div>
      </AnimationContainer>
    </div>
  );
}
