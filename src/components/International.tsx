"use client";
import { FunctionComponent } from "react";
import InternationalSelect from "./ui/InternationalPage/InternationSelect";
import Footers from "./ui/footers";
import ServerUpdate from "./ui/InternationalPage/ServerUpdate";
import InternationalRecomm from "./ui/InternationalPage/InternationRecomm";
import { hotelRecommend } from "@/app/api/hotelRecommend/hotelRecommend";
import RegionSelect from "./ui/InternationalPage/regionSelect";

interface InternationalProps {
  data: hotelRecommend[];
}

const International: FunctionComponent<InternationalProps> = (props) => {
  const { data } = props;
  return (
    <>
      <div className="w-full lg:h-72 h-[470px] overflow-hidden relative flex justify-center items-center bg-internationalHome bg-no-repeat bg-cover lg:rounded-b-3xl">
        <div className=" absolute text-4xl text-white left-10 lg:top-16 top-3">
          订酒店，用携程！
        </div>
        <InternationalSelect />
      </div>
      <div className="dark:bg-slate-700">
        {/* <InternationalSelect />
         */}
        <ServerUpdate />
        <InternationalRecomm data={data} />
        <RegionSelect />
        <Footers />
      </div>
    </>
  );
};

export default International;
