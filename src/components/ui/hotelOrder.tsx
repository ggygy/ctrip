"use client";
import { DatePicker, Divider, Table } from "antd";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { places } from "./data/hotelData";
import { InputRender } from "./inputRender";

export default function HotelOrder() {
  const [placeShow, setplaceShow] = useState(false);
  const { RangePicker } = DatePicker;
  const [placeValue, setPlaceValue] = useState("天津");
  const placeRender = () => {
    return (
      <div
        className={clsx(" bg-white block rounded-lg z-50 w-full", {
          hidden: !placeShow,
        })}
        onBlur={() => setplaceShow(false)}
      >
        {places.map((place, index) => (
          <div key={index}>
            <div className="bg-gray-200 text-left p-2 rounded-md">
              {place.desc}
            </div>
            <ul>
              {place.data.map((d, index) => (
                <li
                  key={index}
                  className="inline-block w-1/5 hover:bg-blue-300 rounded-md text-center cursor-pointer"
                  onClick={(e) => {
                    setPlaceValue(d);
                    setplaceShow(false);
                  }}
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  const placeSearch = () => {};

  return (
    <div className="bg-gradient-to-r from-primary to-white justify-center items-center m-5 w-5/6 h-64 relative  rounded-md ">
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
          <div className="flex flex-wrap w-1/2">
            <div className="rounded-md">
              <InputRender
                desc={"目的地/酒店名称"}
                setshow={setplaceShow}
                value={placeValue}
                setValue={setPlaceValue}
              />
            </div>
            {placeRender()}
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
      <div className="flex h-16 bg-white my-3 mx-5 rounded-md">
        <div className="flex flex-wrap rounded-md w-full h-full">
          <div className="rounded-md w-2/12 h-full">
            <InputRender
              desc={"房间及住客"}
              setshow={setplaceShow}
              value={placeValue}
              setValue={setPlaceValue}
            />
            <Divider type="vertical" className="h-1/2 " />
          </div>

          <div className="rounded-md w-3/12 h-full">
            <InputRender
              desc={"酒店级别"}
              setshow={setplaceShow}
              value={placeValue}
              setValue={setPlaceValue}
            />
            <Divider type="vertical" className="h-1/2 " />
          </div>
          <div className="rounded-md w-3/12 h-full">
            <InputRender
              desc={"关键词(选填)"}
              setshow={setplaceShow}
              value={placeValue}
              setValue={setPlaceValue}
            />
            <Divider type="vertical" className="h-1/2 " />
          </div>
          <div className="rounded-md w-2/12 h-full">
            <button onClick={placeSearch}>搜索</button>
          </div>
        </div>
      </div>
    </div>
  );
}
