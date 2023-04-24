"use client";
import { data } from "@/public/data/city";
import { Select } from "antd";
import { FunctionComponent, useState } from "react";
import SeasonCard from "./ui/seasonHot/seasonCard";
import Image from "next/image";
import { seasonHot } from "@/app/api/seasonHot/seasonHot";
import axios from "axios";
interface SeasonHotProps {
  groupData: seasonHot[];
  flightData: seasonHot[];
}

const SeasonHot: FunctionComponent<SeasonHotProps> = (props) => {
  const { groupData, flightData } = props;
  const [othersite, setothersite] = useState("上海");
  const [seasonGroup, setSeasonGroup] = useState<seasonHot[]>(groupData);
  const [seasonFlight, setSeasonFlight] = useState<seasonHot[]>(flightData);
  const [open, setopen] = useState<boolean>(false);

  const getSeasonHotData = (currentCity: string) => {
    axios({
      method: "get",
      url: `http://localhost:3000/api/seasonHot?city=${currentCity}&key=group/`,
      responseType: "json",
    }).then(function (response) {
      // console.log("response.data", response.data);
      setSeasonGroup(response.data);
    });
    axios({
      method: "get",
      url: `http://localhost:3000/api/seasonHot?city=${currentCity}&key=flight/`,
      responseType: "json",
    }).then(function (response) {
      setSeasonFlight(response.data);
    });
  };

  const moreRender = () => {
    return (
      <div className="overflow-scroll cursor-pointer flex flex-wrap max-h-[300px] dark:bg-slate-700">
        {data.map((i, index) => (
          <div
            key={index}
            onClick={() => {
              setothersite(i);
              getSeasonHotData(i);
              setopen(false);
            }}
            className="hover:bg-blue-100 w-20 leading-8 justify-center flex"
          >
            <span>{i}</span>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <div className="w-full my-6 flex flex-row h-10">
        <div className="mr-4 text-xl font-medium dark:text-slate-50">
          当季
          <span className="text-orange-300">热推</span>
        </div>
        <Select
          open={open}
          value={othersite}
          onClick={() => setopen(true)}
          onBlur={() => {
            setTimeout(() => {
              setopen(false);
            }, 300);
          }}
          placement="bottomLeft"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{
            width: "30%",
          }}
          dropdownRender={moreRender}
        />
      </div>
      <div className="flex lg:flex-nowrap flex-wrap">
        <div className="lg:w-1/2  mr-3 bg-blue-50 rounded-t-2xl relative mt-4 lg:mt-0">
          <div className="absolute left-24 lg:left-0">
            <Image src="/groupBorder.png" alt="" width={320} height={587} />
          </div>
          <SeasonCard
            title="当季热卖 跟团游"
            pic="/group.png"
            data={seasonGroup}
          />
        </div>
        <div className="lg:w-1/2 mr-3 bg-purple-50 rounded-t-2xl relative mt-4 lg:mt-0">
          <div className="absolute left-24 lg:left-0">
            <Image src="/flightBorder.png" alt="" width={320} height={587} />
          </div>
          <SeasonCard
            title="周末畅游 特价旅票"
            pic="/flight.png"
            data={seasonFlight}
          />
        </div>
      </div>
    </div>
  );
};

export default SeasonHot;
