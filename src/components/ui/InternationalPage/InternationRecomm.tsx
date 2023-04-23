"use client";
import { hotelRecommend } from "@/app/api/hotelRecommend/hotelRecommend";
import { getBaseUrl } from "@/lib/getBaseUrl";
import axios from "axios";
import { FunctionComponent, useState } from "react";
import HotelCard from "../hotelRecommend/hotelCard";
import HotelSelect from "./hotelSelect";

interface InternationalRecommProps {
  data: hotelRecommend[];
}

const InternationalRecomm: FunctionComponent<InternationalRecommProps> = (
  props
) => {
  const { data } = props;
  const [hotelData, setHotelData] = useState<hotelRecommend[]>(data);
  const [selectedSite, setselectedSite] = useState("新加坡");
  const getHotelData = (currentSite: string) => {
    axios({
      method: "get",
      url: `${getBaseUrl()}/api/hotelRecommend?city=${currentSite}`,
      responseType: "json",
    }).then(function (response) {
      setHotelData(response.data);
    });
  };
  return (
    <div className="w-full flex flex-col  mt-6">
      <div className=" my-4 lg:text-3xl text-xl font-bold flex justify-center items-center dark:text-white">
        酒店推荐
      </div>
      <div className="w-full my-4">
        <HotelSelect
          selectedSite={selectedSite}
          setselectedSite={setselectedSite}
          getHotelData={getHotelData}
        />
      </div>
      <div className="flex lg:flex-row lg:flex-nowrap flex-col justify-center items-center">
        {hotelData.map((item, index) => (
          <HotelCard key={index} data={item} isHover={false} />
        ))}
      </div>
    </div>
  );
};

export default InternationalRecomm;
