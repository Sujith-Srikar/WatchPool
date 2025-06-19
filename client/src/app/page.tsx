"use client";
import { Hero, CTA, Footer, Feature, Appbar } from "@/app/components/index";
// import { authOptions } from "@/lib/auth-options";

export default function LandingPage() {
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
