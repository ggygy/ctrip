"use client";
import { DatePicker, Input } from "antd";
import Image from "next/image";
import { useState } from "react";
import { HotelInput } from "./ui/HotelInput";
import GuestSelect from "./ui/GuestSelect";
import MultiSelect from "./ui/multiSelect";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import DatePick from "./ui/datePick";
import dayjs from "dayjs";
import Link from "next/link";
const dateFormat = "MM月DD日";
export default function HotelOrder() {
  const [placeValue, setPlaceValue] = useState("天津");
  const [dateValue, setDateValue] = useState<any>([
    dayjs(dayjs(), dateFormat),
    dayjs(dayjs().add(1, "day"), dateFormat),
  ]);
  const [roomData, setRoomData] = useState();
  const [hotelStart, setHotelStart] = useState("不限");
  const [extraInfo, setExtraInfo] = useState("不限");
  const { isOpen } = useSelector((store: any) => store.menuState);

  const placeSearch = () => {
    const data = {
      placeValue,
      dateValue,
      roomData,
      hotelStart,
      extraInfo,
    };
  };
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-primary to-white justify-center items-center relative  rounded-md border-blue-100 border-2",
        {
          "h-64": isOpen,
          "h-[550px]": !isOpen,
        }
      )}
    >
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
      {isOpen ? (
        <div className="h-16 w-11/12  bg-white my-3 mx-5 rounded-md">
          <div className="flex flex-wrap rounded-md w-full h-full">
            <div className="flex flex-wrap w-1/2 border-r-[1px] border-gray-100">
              <div className="rounded-md w-full fontlarge">
                <HotelInput
                  desc={"目的地/酒店名称"}
                  value={placeValue}
                  setValue={setPlaceValue}
                />
              </div>
            </div>
            <div className="w-1/2 h-full">
              <DatePick value={dateValue} setValue={setDateValue} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center  w-5/6 ">
          <div className="bg-white w-full ml-16 rounded-md fontlarge">
            <HotelInput
              desc={"目的地/酒店名称"}
              value={placeValue}
              setValue={setPlaceValue}
            />
          </div>
          <div className=" w-full  ml-16">
            <div className="flex flex-col my-2 mb-2 rounded-md bg-white">
              <label className=" text-gray-500 text-sm text-ellipsis mt-1 ml-1">
                入住
              </label>
              <DatePicker
                bordered={false}
                defaultValue={dayjs()}
                format={dateFormat}
              />
            </div>
            <div className="flex flex-col mb-2 rounded-md bg-white">
              <label className=" text-gray-500 text-sm text-ellipsis mt-1 ml-1">
                退房
              </label>
              <DatePicker
                bordered={false}
                defaultValue={dayjs().add(1, "day")}
                format={dateFormat}
              />
            </div>
          </div>
        </div>
      )}
      {isOpen ? (
        <div className="flex h-16 my-3 mx-5 rounded-md w-11/12">
          <div className="flex flex-wrap rounded-md w-3/4 h-full bg-white">
            <div className="rounded-md w-1/3 h-full border-r-[1px]">
              <GuestSelect setRoom={setRoomData} />
            </div>

            <div className="rounded-md w-1/3 h-full">
              <MultiSelect
                desc="酒店级别"
                defaultValue=""
                setHotelStart={setHotelStart}
              />
            </div>
            <div className="rounded-md w-1/3 h-full flex flex-col ">
              <label className=" text-gray-500  text-ellipsis text-sm mt-1 ml-1">
                关键词(选填)
              </label>
              <div className="fontlarge">
                <Input
                  placeholder="机场火车站酒店名称"
                  className="h-8"
                  bordered={false}
                  onChange={(e) => setExtraInfo(e.currentTarget.value)}
                ></Input>
              </div>
            </div>
          </div>
          <div className="rounded-md w-1/4 h-full  text-center">
            <Link href={"https://hotels.ctrip.com/hotels/list"}>
              <button
                // onClick={placeSearch}
                className="flex flex-wrap rounded-md justify-center bg-gradient-to-r from-blue-400 to-blue-500 w-32 h-full ml-4"
              >
                <span className="text-2xl font-medium h-6 leading-6 text-white mt-5 ml-3 flex flex-wrap justify-center">
                  搜索
                </span>
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col rounded-md w-5/6 ">
          <div className="rounded-md w-full ml-8 mb-2 bg-white">
            <GuestSelect setRoom={setRoomData} />
          </div>
          <div className="rounded-md w-full ml-8 mb-2 bg-white">
            <MultiSelect
              desc="酒店级别"
              defaultValue=""
              setHotelStart={setHotelStart}
            />
          </div>
          <div className="rounded-md flex flex-col ml-8 mb-2 bg-white w-full">
            <label className=" text-gray-500 text-sm text-ellipsis mt-1 ml-1">
              关键词(选填)
            </label>
            <div className="fontlarge">
              <Input
                placeholder="机场火车站酒店名称"
                className="h-8  "
                bordered={false}
                onChange={(e) => setExtraInfo(e.currentTarget.value)}
              ></Input>
            </div>
          </div>
          <div className="rounded-md h-full  text-center flex justify-center items-center">
            <Link href={"https://hotels.ctrip.com/hotels/list"}>
              <button
                // onClick={placeSearch}
                className="flex flex-wrap rounded-md justify-center bg-gradient-to-r from-blue-400 to-blue-500 w-32 h-full ml-4"
              >
                <span className="text-2xl font-medium h-10 mt-3 leading-6 text-white ml-3 flex flex-wrap justify-center">
                  搜索
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
