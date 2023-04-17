// import BaiduMap from "@/components/baiduMap";
import { BussinessInfo } from "@/components/bussinessInfo";
import HotelRecommend from "@/components/hotelRecommend";
import SeasonHot from "@/components/seasonHot";

import HotelOrder from "@/components/ui/hotelOrder";
import Rotation from "@/components/ui/rotation";
import type { Metadata } from "next";
import { getHotelRecommends } from "./api/hotelRecommend/fetchHotelRecommend";
import { getSeasonHot } from "./api/seasonHot/fetchSeasonHot";

export const metadata: Metadata = {
  title: "仿携程PC大首页",
  description: "携程旅行官网：酒店预订、机票预订查询、旅行度假",
};

export default async function Home() {
  const hotelRecommends = await getHotelRecommends("上海");
  const groupData = await getSeasonHot("上海", "group");
  const flightData = await getSeasonHot("上海", "flight");

  return (
    <div className="w-full  dark:bg-slate-900">
      <div className="flex  content-between">
        <div className="flex flex-col   w-full lg:w-3/5 ">
          <HotelOrder />
          <Rotation />
          <HotelRecommend data={hotelRecommends} />
          <SeasonHot groupData={groupData} flightData={flightData} />
          {/* <BaiduMap /> */}
        </div>
        <div className="lg:flex flex-col lg:w-2/5 h-full bg-black hidden border-2"></div>
      </div>

      <div>
        <BussinessInfo />
      </div>
    </div>
  );
}
