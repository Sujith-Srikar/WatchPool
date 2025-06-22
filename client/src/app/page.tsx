"use client";
import { Hero, CTA, Footer, Feature, Appbar } from "@/app/components/index";
// import { authOptions } from "@/lib/auth-options";
import Lenis from "lenis";
import { useEffect } from "react";

export default function LandingPage() {
  
  useEffect (()=>{
    const lenis = new Lenis();

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  })
  return (
    <>
      <div className="flex min-h-screen flex-col bg-stone-950 bg-page-gradient">
        <Appbar />
        <Hero />
        <Feature />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
