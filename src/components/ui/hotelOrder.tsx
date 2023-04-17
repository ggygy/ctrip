"use client";
import { DatePicker, Input, Select } from "antd";
import Image from "next/image";
import { useState } from "react";
import { HotelInput } from "./HotelInput";
import GuestSelect from "./GuestSelect";
import MultiSelect from "./MultiSelect";

export default function HotelOrder() {
  const { RangePicker } = DatePicker;
  const [placeValue, setPlaceValue] = useState("天津");

  const placeSearch = () => {};

  return (
    <div className="bg-gradient-to-r from-primary to-white justify-center items-center h-64 relative  rounded-md border-blue-100 border-2">
      <div className="h-20 relative">
        <Image
          src="/static/hotel_order/homepage-hotel-searchbox-background.png"
          alt="Picture of the author"
          width={300}
          height={60}
          className="absolute left-23"
        />
        <div className="absolute h-5 w-24  text-2xl text-white top-5 left-3 ">
          预订酒店
        </div>
        <Image
          src="/static/hotel_order/easy-stay.png"
          alt="Picture of the author"
          width={157}
          height={28}
          className="absolute top-5 right-3 "
        />
      </div>

      <div className="h-16 w-11/12  bg-white my-3 mx-5 rounded-md">
        <div className="flex flex-wrap after:rounded-md w-full h-full">
          <div className="flex flex-wrap w-1/2 border-r-[1px] border-gray-100">
            <div className="rounded-md w-full">
              <HotelInput
                desc={"目的地/酒店名称"}
                value={placeValue}
                setValue={setPlaceValue}
              />
            </div>
          </div>
          <div className="w-1/2 h-full">
            <RangePicker
              suffixIcon={null}
              bordered={false}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex h-16  my-3 mx-5 rounded-md">
        <div className="flex flex-wrap rounded-md w-3/4 h-full bg-white">
          <div className="rounded-md w-1/3 h-full border-r-[1px]">
            <GuestSelect />
          </div>

          <div className="rounded-md w-1/3 h-full">
            <MultiSelect desc="酒店级别" defaultValue="12312312" />
          </div>
          <div className="rounded-md w-1/3 h-full flex flex-col">
            <label className=" text-gray-500 text-sm text-ellipsis mt-1 ml-1">
              关键词(选填)
            </label>
            <div>
              <Input
                placeholder="机场火车站酒店名称"
                className="h-8"
                bordered={false}
              ></Input>
            </div>
          </div>
        </div>
        <div className="rounded-md w-1/4 h-full bg-gradient-to-r from-blue-400 to-blue-500 text-center ml-4">
          <button
            onClick={placeSearch}
            className="flex flex-wrap justify-center "
          >
            <span className="text-2xl font-medium h-6px leading-6 text-white mt-5 ml-12">
              搜索
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
