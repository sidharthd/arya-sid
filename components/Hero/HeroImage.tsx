import { ReactNode } from "react";
import Image from "next/image";
import image from "./hero-image.jpg";

const Container = ({ children }: { children: ReactNode }) => (
  <div className="w-20">{children}</div>
);

export const HeroImage = () => (
  <Container>
    <Image
      alt="photo of arya and sidharth smiling"
      className="rounded-full"
      src={image}
    />
  </Container>
);
