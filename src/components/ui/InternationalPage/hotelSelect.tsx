"use client";
import { data } from "@/public/data/city";
import { FunctionComponent, useEffect, useState } from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Radio, Select } from "antd";
import { cn } from "@/lib/utils";

interface HotelSelectProps {
  selectedSite: string;
  setselectedSite: (v: string) => void;
  getHotelData: (currentSite: string) => void;
}

const HotelSelect: FunctionComponent<HotelSelectProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [othersite, setOthersite] = useState("清迈");
  const [cityOption, setCityOption] = useState([
    "新加坡",
    "普吉岛",
    "东京",
    "曼谷",
    "大阪",
    "巴厘岛",
    "清迈",
  ]);
  const { selectedSite, setselectedSite, getHotelData } = props;
  useEffect(() => {
    let temp = cityOption;
    temp.pop();
    temp.push(othersite);
    setCityOption(temp);
  }, [othersite]);

  const handleMore = (i: string) => {
    setselectedSite(i);
    setOthersite(i);
    getHotelData(i);
    setOpen(false);
  };
  const moreRender = () => {
    return (
      <div className="overflow-scroll cursor-pointer flex flex-wrap max-h-[300px] ">
        {data.map((i, index) => (
          <div
            key={index}
            onClick={() => {
              handleMore(i);
            }}
            className="hover:bg-blue-100 w-20 leading-8 justify-center flex "
          >
            <span>{i}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center items-center mx-8">
      <div className=" bg-white ml-1 dark:bg-slate-700 flex ">
        <div className="flex flex-row lg:flex-nowrap flex-wrap cursor-pointer justify-start">
          {cityOption.map((city) => (
            <div
              key={city}
              className={cn(
                "m-2 w-20 h-8 text-center text-sm flex justify-center items-center dark:bg-white",
                {
                  "border-[1px] ": selectedSite != city,
                  "text-blue-500 bg-blue-100 ": selectedSite == city,
                }
              )}
              onClick={() => {
                setselectedSite(city);
                getHotelData(city);
              }}
            >
              {city}
            </div>
          ))}
          <div className="lg:mt-0 mt-2 ml-2 w-20 h-8 overflow-hidden border-[1px] hover:bg-blue-100 dark:bg-gray-200">
            <Select
              open={open}
              value={"更多"}
              onClick={() => setOpen(true)}
              onBlur={() => {
                setTimeout(() => {
                  setOpen(false);
                }, 100);
              }}
              placement="bottomLeft"
              bordered={false}
              dropdownMatchSelectWidth={false}
              dropdownStyle={{
                width: "30%",
              }}
              style={{ border: 0 }}
              suffixIcon={
                open ? (
                  <CaretUpOutlined style={{ color: "#007aff" }} />
                ) : (
                  <CaretDownOutlined />
                )
              }
              dropdownRender={moreRender}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSelect;
