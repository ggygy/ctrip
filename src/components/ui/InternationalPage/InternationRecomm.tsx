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
    <div className="w-full flex flex-col  mt-10">
      <div className="text-3xl font-bold flex justify-center items-center">
        酒店推荐
      </div>
      <div className="w-full">
        <HotelSelect
          selectedSite={selectedSite}
          setselectedSite={setselectedSite}
          getHotelData={getHotelData}
        />
      </div>
      <div className="flex flex-nowrap justify-center items-center">
        {hotelData.map((item, index) => (
          <HotelCard key={index} data={item} isHover={false} />
        ))}
      </div>
    </div>
  );
};

export default InternationalRecomm;
