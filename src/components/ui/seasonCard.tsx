import Image from "next/image";
import { FunctionComponent } from "react";
import { RightCircleOutlined } from "@ant-design/icons";
import TravelCard from "./travelCard";
import { seasonHot } from "@/app/api/seasonHot/seasonHot";
interface SeasonCardProps {
  title: string;
  pic: string;
  data: seasonHot[] | undefined;
}

const SeasonCard: FunctionComponent<SeasonCardProps> = (props) => {
  const { title, pic, data } = props;

  return (
    <div className="rounded-t-2xl ">
      <div className="flex flex-wrap  rounded-t-xl">
        <Image
          src={pic}
          alt=""
          width={96}
          height={71}
          className="w-[96px] h-[71px]"
        />

        <div className="flex justify-center items-center p-1">
          <div className="text-base font-semibold overflow-hidden">{title}</div>
          <div className="ml-2">
            <RightCircleOutlined
              style={{
                backgroundColor: "#336788",
                borderRadius: "100%",
                color: "white",
              }}
            />
          </div>
        </div>
      </div>

      <div className="w-[97%] grid grid-rows-5 gap-[2px]  bg-white overflow-hidden rounded-b-lg mb-2 mx-1">
        {data &&
          data.map((item, index) => (
            <TravelCard data={item} key={index} index={index + 1} />
          ))}
      </div>
    </div>
  );
};

export default SeasonCard;
