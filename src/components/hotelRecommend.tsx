"use client";

import { FunctionComponent, useEffect, useState } from "react";
import HotelCard from "./ui/hotelRecommend/hotelCard";
import HotelMenu from "./ui/hotelRecommend/hotelMenu";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { cn } from "@/lib/utils";
import { hotelRecommend } from "@/app/api/hotelRecommend/hotelRecommend";
import axios from "axios";
import { getBaseUrl } from "@/lib/getBaseUrl";

interface HotelRecommendProps {
  data: hotelRecommend[];
}

const HotelRecommend: FunctionComponent<HotelRecommendProps> = (props) => {
  const { data } = props;
  const [hotelData, setHotelData] = useState<hotelRecommend[]>(data);
  const [selectedSite, setselectedSite] = useState("上海");
  const [moveLeft, setmoveLeft] = useState(false);
  const [moveRight, setmoveRight] = useState(false);
  const [translateX, settranslateX] = useState(0);

  const getHotelData = (currentSite: string) => {
    axios({
      method: "get",
      url: `${getBaseUrl()}/api/hotelRecommend?city=${currentSite}`,
      responseType: "json",
    }).then(function (response) {
      setHotelData(response.data);
    });
  };

  useEffect(() => {
    const hotelCa = document.getElementById("hotelCa");
    const wc = hotelCa?.offsetWidth!;
    const hotelRe = document.getElementById("hotelRe");
    const wr = hotelRe?.offsetWidth!;
    if (!translateX) {
      setmoveLeft(false);
      setmoveRight(true);
    } else if (translateX * -1 + wr > wc) {
      setmoveLeft(true);
      setmoveRight(false);
    } else {
      setmoveLeft(true);
      setmoveRight(true);
    }
  }, [translateX]);
  return (
    <div className="w-full">
      <HotelMenu
        selectedSite={selectedSite}
        setselectedSite={setselectedSite}
        getHotelData={getHotelData}
      />
      <div
        className="w-full flex flex-nowrap overflow-hidden relative"
        id="hotelRe"
      >
        <div>
          <div
            className={cn(
              "flex cursor-pointer absolute top-24 left-0 justify-center rounded-lg items-center h-10 w-10 z-10 -translate-x-2  bg-[#ffffff] opacity-60",
              { hidden: !moveLeft }
            )}
            onClick={() => {
              const dom = document.getElementById("hotelRe");
              const w = dom?.offsetWidth!;
              settranslateX(translateX + w);
            }}
          >
            <LeftOutlined />
          </div>
          <div
            className={cn(
              "flex cursor-pointer absolute top-24 right-1 justify-center rounded-lg items-center h-10 w-10 z-10 translate-x-2 bg-[#ffffff] opacity-60",
              { hidden: !moveRight }
            )}
            onClick={() => {
              const dom = document.getElementById("hotelRe");
              const w = dom?.offsetWidth!;
              settranslateX(translateX - w);
            }}
          >
            <RightOutlined />
          </div>
        </div>

        <div
          className={cn("flex flex-nowrap")}
          style={{
            transform: `translateX(${translateX}px)`,
            transition: "all 1s",
          }}
          id="hotelCa"
        >
          {hotelData.map((item, index) => (
            <HotelCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelRecommend;
