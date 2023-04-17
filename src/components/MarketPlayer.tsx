"use client";

import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Carousel } from 'antd';
import { cn } from "@/lib/utils";

interface MarketContainerProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  cityName: string
  cityImgUrl: string
  cityTem: {
    Lb: number
    Ub: number
  }
  hotels: {
    imgUrl: string
    skipUrl: string
    name: string
    startingPrice: number
  }[]
}

interface MarketPlayerProps {

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
      <div className={cn("w-52 h-64 mt-3 ml-24 flex flex-col")}>
        {
          hotels.map((hotel) => (
            <Link
              href={hotel.skipUrl}
              target="_blank"
              className="w-40 h-12 bg-white bg-opacity-40 rounded-md overflow-hidden mt-2 flex flex-row"
              key={hotel.name}>
              <Image
                className="rounded-md overflow-hidden"
                style={{margin: '3px 3px'}}
                src={hotel.imgUrl}
                alt=""
                width={40}
                height={40}
              />
              <div className="flex flex-col mx-1 my-auto">
                <span className="w-24 text-slate-50 text-xs truncate">{hotel.name}</span>
                <span className="text-slate-50 text-xs">￥<span className="text-sm font-bold">{hotel.startingPrice}</span>起</span>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

const MarketPlayer: FunctionComponent<MarketPlayerProps> = () => {
  const cityInfo = {
    cityName: '武汉',
    cityImgUrl: 'https://dimg04.c-ctrip.com/images/0zg6b120009h126he8173.jpg',
    cityTem: {
      Lb: 17,
      Ub: 25
    },
    hotels: [
      {
        imgUrl: 'https://dimg04.c-ctrip.com/images/0206e120008ilkmtg49CA_W_1080_808_R5_D.jpg',
        skipUrl: 'https://hotels.ctrip.com/hotels/28237078.html?checkin=2022-05-22&checkout=2022-05-23&ctm_ref=hp_mkt_pt_pro_01',
        name: '武汉泛海费尔蒙酒店',
        startingPrice: 1000,
      },
      {
        imgUrl: 'https://dimg04.c-ctrip.com/images/0206e120008ilkmtg49CA_W_1080_808_R5_D.jpg',
        skipUrl: 'https://hotels.ctrip.com/hotels/28237078.html?checkin=2022-05-22&checkout=2022-05-23&ctm_ref=hp_mkt_pt_pro_01',
        name: '武汉泛海费尔蒙酒店',
        startingPrice: 1000,
      },
      {
        imgUrl: 'https://dimg04.c-ctrip.com/images/0206e120008ilkmtg49CA_W_1080_808_R5_D.jpg',
        skipUrl: 'https://hotels.ctrip.com/hotels/28237078.html?checkin=2022-05-22&checkout=2022-05-23&ctm_ref=hp_mkt_pt_pro_01',
        name: '武汉泛海费尔蒙酒店',
        startingPrice: 1000,
      },
    ]
  }
  return (
    <Carousel autoplay>
      <div className="w-full">
        <MarketContainer
          cityName={cityInfo.cityName}
          cityImgUrl={cityInfo.cityImgUrl}
          cityTem={cityInfo.cityTem}
          hotels={cityInfo.hotels}
        />
      </div>
      <div className="w-full">
        <MarketContainer
          cityName={cityInfo.cityName}
          cityImgUrl={cityInfo.cityImgUrl}
          cityTem={cityInfo.cityTem}
          hotels={cityInfo.hotels}
        />
      </div>
      <div className="w-full">
        <MarketContainer
          cityName={cityInfo.cityName}
          cityImgUrl={cityInfo.cityImgUrl}
          cityTem={cityInfo.cityTem}
          hotels={cityInfo.hotels}
        />
      </div>
      <div className="w-full">
        <MarketContainer
          cityName={cityInfo.cityName}
          cityImgUrl={cityInfo.cityImgUrl}
          cityTem={cityInfo.cityTem}
          hotels={cityInfo.hotels}
        />
      </div>
    </Carousel>
  );
}

export default MarketPlayer;