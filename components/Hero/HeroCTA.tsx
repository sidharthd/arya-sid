import Link from "next/link";
import { Button } from "components";

const weddingLocation = "https://goo.gl/maps/C5hJjDiuGfSrth4E9";
const receptionLocation = "https://goo.gl/maps/RDFdikRrGrwpby2R9";

export const HeroCTA = () => {
  return (
    <div className="mt-10 space-y-3">
      <a href={weddingLocation} target="_blank" rel="noreferrer">
        <Button className="w-full">View wedding venue on map</Button>
      </a>
      <a href={receptionLocation} target="_blank" rel="noreferrer">
        <Button className="w-full">View reception venue on map</Button>
      </a>
    </div>
  );
};
