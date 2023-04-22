"use client";

import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useEffect } from "react";
import { Carousel } from 'antd';
import { cn } from "@/lib/utils";
import type { marketData } from "@/app/api/market/market";
import { useRouter } from "next/navigation";

interface MarketContainerProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  cityName: string
  cityImgUrl: string
  cityTem: {
    Lb: number
    Ub: number
  }
  hotels: {
    hotelImgUrl: string
    hotelSkipUrl: string
    hotelName: string
    hotelStartingPrice: number
  }[]
}

export const MarketContainer: FunctionComponent<MarketContainerProps> = ({ cityName, cityImgUrl, cityTem, hotels, className }) => {
  return (
    <div
      className={cn('w-full h-auto flex flex-row', className)}
      style={{ background: `url("${cityImgUrl}") center center / contain no-repeat`, height: '616px' }}>
      <div className="relative top-5 left-5 w-36 h-10 flex flex-col">
        <span className="text-slate-50 text-sm">{cityName}酒店口碑榜</span>
        <span className="text-slate-50 text-sm">{cityTem.Lb}°C~{cityTem.Ub}°C</span>
      </div>
      <div className={cn("w-52 h-64 mt-[14px] ml-24 flex flex-col")}>
        {
          hotels && hotels.map((hotel) => (
            <Link
              href={hotel.hotelSkipUrl}
              target="_blank"
              className="w-40 h-12 bg-white bg-opacity-40 rounded-md overflow-hidden mt-2 flex flex-row"
              key={hotel.hotelName}>
              <Image
                className="rounded-md max-w-[45px] overflow-hidden"
                style={{ margin: '3px 3px', width: "auto", height: "auto"}}
                src={hotel.hotelImgUrl}
                alt=""
                width={50}
                height={40}
              />
              <div className="flex flex-col ml-1 mr-1 my-auto">
                <span className="w-24 text-slate-50 text-xs truncate">{hotel.hotelName}</span>
                <span className="text-slate-50 text-xs">￥<span className="text-sm font-bold">{hotel.hotelStartingPrice}</span>起</span>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

interface MarketPlayerProps {
  marketData: marketData[]
}

const MarketPlayer: FunctionComponent<MarketPlayerProps> = ({marketData}) => {
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      router.refresh();
    }, 20*1000)
    return () => {
      clearInterval(timer)
    }
  }, [marketData]) 

  
  return (
    <Carousel autoplay autoplaySpeed={5000}>
      {
        marketData && marketData.map((item: marketData) => (
          <div key={item.cityName} className="w-full">
            <MarketContainer
              cityName={item.cityName}
              cityImgUrl={item.cityImgUrl}
              cityTem={item.cityTem}
              hotels={item.hotels}
            />
          </div>
        ))
      }
    </Carousel>
  );
}

export default MarketPlayer;