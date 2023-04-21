"use client";
import { FunctionComponent } from "react";
import InternationalSelect from "./ui/InternationSelect";
import Footers from "./ui/footers";
import ServerUpdate from "./ui/ServerUpdate";
import InternationalRecomm from "./ui/InternationRecomm";
import { hotelRecommend } from "@/app/api/hotelRecommend/hotelRecommend";

interface InternationalProps {
  data: hotelRecommend[];
}

const International: FunctionComponent<InternationalProps> = (props) => {
  const { data } = props;
  return (
    <>
      <div className="w-full h-72 overflow-hidden relative flex justify-center items-center">
        <div className="w-[1474px] h-[241px] bg-internationalHome bg-no-repeat bg-cover rounded-b-3xl"></div>
        <div className=" absolute text-4xl text-white left-10 top-16">
          订酒店，用携程！
        </div>
        <InternationalSelect />
      </div>
      <div>
        {/* <InternationalSelect />
         */}
        <ServerUpdate />
        <InternationalRecomm data={data} />
        <Footers />
      </div>
    </>
  );
};

export default International;