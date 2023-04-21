import { hotelRecommend } from "@/app/api/hotelRecommend/hotelRecommend";
import { getBaseUrl } from "@/lib/getBaseUrl";
import axios from "axios";
import { FunctionComponent, useState } from "react";
import HotelCard from "./hotelCard";

interface InternationalRecommProps {
  data: hotelRecommend[];
}

const InternationalRecomm: FunctionComponent<InternationalRecommProps> = (
  props
) => {
  const { data } = props;
  const [hotelData, setHotelData] = useState<hotelRecommend[]>(data);
  const [selectedSite, setselectedSite] = useState("上海");
  const getHotelData = (currentSite: string) => {
    axios({
      method: "get",
      url: `${getBaseUrl()}/api/hotelRecommend?city=${currentSite}`,
      responseType: "json",
    }).then(function (response) {
      console.log("selectedSite ", selectedSite);
      setHotelData(response.data);
    });
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="text-3xl font-bold ">酒店服务升级</div>
      <div className="flex flex-nowrap">
        {hotelData.map((item, index) => (
          <HotelCard key={index} data={item} isHover={false} />
        ))}
      </div>
    </div>
  );
};

export default InternationalRecomm;
