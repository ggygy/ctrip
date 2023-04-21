import MainContent from "@/components/mainContent";
import type { Metadata } from "next";
import { getSeasonHot } from "./api/seasonHot/fetchSeasonHot";
import { getHotelRecommends } from "./api/hotelRecommend/fetchHotelRecommend";
import { getMarketData } from './api/market/getMarketData'

export const metadata: Metadata = {
  title: "仿携程PC大首页",
  description: "携程旅行官网：酒店预订、机票预订查询、旅行度假",
};

export default async function Home() {
  const hotelRecommends = await getHotelRecommends("上海");
  const groupData = await getSeasonHot("上海", "group");
  const flightData = await getSeasonHot("上海", "flight");
  const marketData = await getMarketData()

  return (
    <div className="w-full h-full dark:bg-slate-900">
      <MainContent
        className="flex content-between"
        hotelRecommends={hotelRecommends}
        groupData={groupData}
        flightData={flightData}
        marketData={marketData} 
      />
    </div>
  );
}
