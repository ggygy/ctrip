import { cn } from "@/lib/utils";
import { Card } from "antd";
import Image from "next/image";
import { FunctionComponent, useState } from "react";

interface HotelCardProps {
  data: any;
}
// picPath: "./../../public/static/hotel_pic/hotel_1.jpg",
// hotelName: "上海酒店xxxxxxxxxxxxxxxxxx",
// stars: 4,
// grade: 4.7,
// rate: "超棒",
// commentsNum: 1000,
// price: "560",
// url:
const HotelCard: FunctionComponent<HotelCardProps> = (props) => {
  const { data } = props;
  const [hover, sethover] = useState<boolean>(false);

  return (
    // box-shadow: 0px 4px 16px 1px rgba(0,0,0,0.0
    <a href={data.url}>
      <Card
        hoverable
        style={{ width: 210, overflow: "hidden", margin: "0 4px" }}
        // className
        // onFocus={() => sethover(true)}
        onMouseEnter={() => sethover(true)}
        // onBlur={() => sethover(false)}
        onMouseLeave={() => sethover(false)}
        cover={
          <Image
            alt={data.hotelName}
            src={"/static/hotel_pic/hotel_1.jpg"}
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
          <div className="m-2 text-ellipsis whitespace-nowrap overflow-hidden w-full font-semibold text-xl ">
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
            <div className="m-2">{data.rate}</div>
          </div>

          <div className="flex m-2">
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
