import { ReactNode } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import image from "./hero-image.jpg";

const Container = ({ children }: { children: ReactNode }) => (
  <div className="w-80 relative -mt-10">{children}</div>
);

export const HeroImage = () => {
  return (
    <Container>
      <div className="w-full">
        <Player
          autoplay
          loop
          src="https://assets6.lottiefiles.com/private_files/lf30_eizw7mli.json"
        />
      </div>

      <div className="absolute inset-24 w-32">
        <Image
          alt="photo of arya and sidharth smiling"
          className="rounded-full"
          src={image}
        />
      </div>
    </Container>
  );
};
