import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BusinessChallenges } from "@/components/sections/BusinessChallenges";
import { Solutions } from "@/components/sections/Solutions";

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
    </>
  );
}