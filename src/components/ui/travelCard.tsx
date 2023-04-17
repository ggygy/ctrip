import { seasonHot } from "@/app/api/seasonHot/seasonHot";
import { cn } from "@/lib/utils";
import { Card } from "antd";
import Image from "next/image";
import { FunctionComponent } from "react";

interface TravelCardProps {
  data: seasonHot;
  index: number;
}

const TravelCard: FunctionComponent<TravelCardProps> = (props) => {
  const { data, index } = props;
  return (
    <Card bordered={false} hoverable>
      <div className="grid grid-cols-travelCard rounded-lg h-20 relative">
        <div
          className={cn(
            "absolute left-0 w-5 h-5 rounded-r-xl text-white flex justify-center items-center",
            {
              "bg-red-600": index == 1,
              "bg-orange-600": index == 2,
              "bg-yellow-600": index == 3,
              "bg-gray-400": index > 3,
            }
          )}
        >
          {index}
        </div>
        <Image
          src={data.picPath}
          alt=""
          width={80}
          height={80}
          className="rounded-lg w-20 h-20"
        ></Image>

        <div className="ml-3 mt-1">
          <div className=" font-bold">{data.title}</div>

          {data.cxChoice == true ? (
            <>
              <div className="border-[1px] text-xs border-green-400 text-green-400 w-14 h-4 flex  justify-center items-center mt-1">
                携程精选
              </div>
              <div className="font-light text-xs text-gray-700 mt-1">
                {data.datePlan}
              </div>
            </>
          ) : (
            data.rate && (
              <div className="flex flex-nowrap flex-row mt-1">
                <div className="font-light text-xs text-blue-600">
                  {data.rate}分
                </div>
                <div className="font-light text-xs text-gray-700">
                  |{data.peopelSum} 人出游
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex flex-nowrap justify-center py-3 flex-col">
          <div className="text-lg font-bold text-blue-500 flex flex-nowrap">
            ￥{data.minPrice}
            <div className="font-light text-sm text-blue-600 mt-1">起</div>
          </div>
          {data.cxChoice ? (
            <div className="font-normal text-sm text-gray-700 flex justify-end">
              {data.discount}折
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
};

export default TravelCard;
