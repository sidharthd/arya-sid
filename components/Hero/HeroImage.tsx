import { ReactNode, useEffect, useRef } from "react";
import Image from "next/image";
import image from "./hero-image.jpg";

const Container = ({ children }: { children: ReactNode }) => (
  <div className="w-80 relative -mt-10">{children}</div>
);

export const HeroImage = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <Container>
      <div className="w-full">
        <lottie-player
          autoplay
          loop
          mode="normal"
          ref={ref}
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
