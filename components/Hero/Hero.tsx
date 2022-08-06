import React from "react";
import { HeroImage } from "./HeroImage";
import { HeroText } from "./HeroText";
import { SubText } from "./SubText";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="p-8 flex flex-col items-center text-center">{children}</div>
);

export const Hero = () => (
  <Container>
    <HeroImage />
    <HeroText />
    <SubText />
  </Container>
);
