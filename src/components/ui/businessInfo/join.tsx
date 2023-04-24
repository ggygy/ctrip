import { joinData } from "@/public/data/businessTravel";
import { FunctionComponent } from "react";
import Image from "next/image";
interface JoinProps {}

const Join: FunctionComponent<JoinProps> = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center mt-4">
      {joinData.map((i, index) => (
        <a href={i.link} className="m-3 grid " key={index}>
          {/* <img
          src={i.url}
          alt={i.alt}
          className=" box-content overflow-clip justify-around"
        /> */}
          <Image
            src={i.url}
            alt={i.alt}
            width={381}
            height={64}
            className=" box-content overflow-clip justify-around"
          ></Image>
        </a>
      ))}
    </div>
  );
};

export default Join;
