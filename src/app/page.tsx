import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BusinessChallenges } from "@/components/sections/BusinessChallenges";
import { Solutions } from "@/components/sections/Solutions";
import { Industries } from "@/components/sections/Industries";
import { TechnologyInAction } from "@/components/sections/TechnologyInAction";
import { OurWork } from "@/components/sections/OurWork";
import { OurMethod } from "@/components/sections/OurMethod";
import { About } from "@/components/sections/About";
import { Insights } from "@/components/sections/Insights";
import { FinalConversion } from "@/components/sections/FinalConversion";

export const metadata: Metadata = {
  title: "Stinet Digital - Transform the Way Your Business Works",
  description:
    "We help businesses modernise operations, connect systems and unlock new opportunities through software, AI, automation and practical digital innovation.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessChallenges />
      <Solutions />
      <Industries />
      <TechnologyInAction />
      <OurWork />
      <OurMethod />
      <About />
      <Insights />
      <FinalConversion />
    </>
  );
}