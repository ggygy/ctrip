"use client";
import { data } from "@/public/data/city";
import { Select } from "antd";
import { FunctionComponent, useState } from "react";
import SeasonCard from "./ui/seasonCard";

interface SeasonHotProps { }

const SeasonHot: FunctionComponent<SeasonHotProps> = () => {
  const [othersite, setothersite] = useState("广州");
  const [open, setopen] = useState<boolean>(false);

  const moreRender = () => {
    return (
      <div className="overflow-scroll cursor-pointer flex flex-wrap max-h-[300px]">
        {data.map((i, index) => (
          <div
            key={index}
            onClick={() => {
              setopen(false);
              setothersite(i);
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
        <div className="mr-4 text-xl font-medium ">
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
            }, 100);
          }}
          placement="bottomLeft"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{
            width: "30%",
          }}
          dropdownRender={moreRender}
        />
      </div>
      <div>
        <div className="w-1/2">
          <SeasonCard title="当季热卖 跟团游" pic="/group.png" />
        </div>
      </div>
    </div>
  );
};

export default SeasonHot;
