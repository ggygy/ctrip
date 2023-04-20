import { hotelRecommend } from "@/app/api/hotelRecommend/hotelRecommend";
import { cn } from "@/lib/utils";
import { Card } from "antd";
import Image from "next/image";
import { FunctionComponent, useState } from "react";

interface HotelCardProps {
  data: hotelRecommend;
}

const HotelCard: FunctionComponent<HotelCardProps> = (props) => {
  const { data } = props;
  const [hover, sethover] = useState<boolean>(false);

  return (
    <a href={data.url}>
      <Card
        hoverable
        className="dark:bg-slate-600"
        style={{ width: 210, overflow: "hidden", margin: "0 4px" }}
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        cover={
          <Image
            alt={data.hotelName}
            src={data.picPath}
            width={210}
            height={160}
            className={cn({ "scale-110": hover })}
            style={{
              // transform: "Scale(1.2)",
              transition: "all 1s",
            }}
          />
        }
      >
        <div className="leading-3 w-full">
          <div className="m-2 text-ellipsis whitespace-nowrap overflow-hidden w-full font-semibold text-xl dark:text-slate-200">
            {data.hotelName}
          </div>
          <Image
            src={"/static/stars.png"}
            alt=""
            width={48}
            height={12}
            className="ml-2"
          ></Image>
          <div className="flex flex-wrap m-2">
            <div className="bg-blue-400 text-white inline-block rounded w-12 text-center text-base leading-6 ">
              <span>{data.grade}</span>
              <span className="ml-[1px] text-blue-100 text-xs leading-4">
                /5
              </span>
            </div>
            <div className="m-2 dark:text-slate-200">{data.rate}</div>
          </div>

          <div className="flex m-2 dark:bg-slate-900">
            <span className="text-sm text-gray-500 mt-1">
              {data.commentsNum}条点评
            </span>
            <span className="flex justify-end m-auto text-xl text-blue-500">
              ￥{data.price}
            </span>
          </div>
        </div>
      </Card>
    </a>
  );
};

export default HotelCard;
