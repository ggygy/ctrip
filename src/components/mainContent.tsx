"use client";

import { FunctionComponent, useEffect, useState } from "react";
import HotelRecommend from "@/components/hotelRecommend";
import SeasonHot from "@/components/seasonHot";
import MarketPlayer from "@/components/MarketPlayer";
import HotelOrder from "@/components/hotelOrder";
import Rotation from "@/components/rotation";
import { BussinessInfo } from "@/components/bussinessInfo";
import { hotelRecommend } from "@/app/api/hotelRecommend/hotelRecommend";
import { seasonHot } from "@/app/api/seasonHot/seasonHot";
import { marketData } from "@/app/api/market/market";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";

interface MainContentProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  hotelRecommends: hotelRecommend[]
  groupData: seasonHot[]
  flightData: seasonHot[]
  marketData: marketData[]
}

const MainContent: FunctionComponent<MainContentProps> = ({ hotelRecommends, groupData, flightData, marketData, className }) => {
  const { isOpen } = useSelector((store: any) => store.menuState);
  const [currentWidth, setCurrentWidth] = useState<boolean>(true)
  
  useEffect(() => {
    setCurrentWidth(window.screen.width > 1000 ? true : false)
  }, [isOpen])

  return (
    !isOpen || currentWidth ?
      <>
        <div className={cn('', className)}>
          <div id="middleContent" className="flex flex-col w-full lg:w-3/5 ">
            <HotelOrder />
            <Rotation />
            <HotelRecommend data={hotelRecommends} />
            <SeasonHot groupData={groupData} flightData={flightData} />
            {/* <BaiduMap /> */}
          </div>
          <div id="rightContent" className="lg:flex flex-col lg:w-2/5 h-full sticky right-0 top-2 mx-6 rounded-xl overflow-hidden">
            <MarketPlayer marketData={marketData} />
          </div>
        </div>

        <div>
          <BussinessInfo />
        </div>
      </>
      : null
  );
}

export default MainContent;