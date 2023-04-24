import { FunctionComponent, useEffect, useState } from "react";
import { HotelInput } from "@/ui/HotelInput";
import { Card, DatePicker, Input } from "antd";
import GuestSelect from "@/ui/GuestSelect";
import GroupSelect from "@/components/ui/GroupSelect";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import dayjs from "dayjs";
import DatePick from "../datePick";
import { useSelector } from "react-redux";
const dateFormat = "MM月DD日";

interface InternationalSelectProps {}
const InternationalSelect: FunctionComponent<InternationalSelectProps> = () => {
  const [placeValue, setPlaceValue] = useState("上海");
  const [roomData, setRoomData] = useState();
  const [hotelStart, setHotelStart] = useState("不限");
  const [extraInfo, setExtraInfo] = useState("不限");
  const [dateValue, setDateValue] = useState<any>([
    dayjs(dayjs(), dateFormat),
    dayjs(dayjs().add(1, "day"), dateFormat),
  ]);
  const { isOpen } = useSelector((store: any) => store.menuState);

  const [currentWidth, setCurrentWidth] = useState<boolean>(true)

  useEffect(() => {
    setCurrentWidth(window.screen.width > 1000 ? true : false)
  }, [isOpen])
  
  const submit = () => {
    const data = {
      placeValue,
      roomData,
      hotelStart,
      extraInfo,
      dateValue,
    };
  };
  return (
    <div className="flex bg-white dark:bg-slate-700 justify-center  absolute w-11/12 mt-24">
      <div className="w-full">
        <Card className="">
          <div className="flex lg:flex-row lg:flex-nowrap flex-col justify-center items-center">
            <div className="border-[1px] fontlarge lg:w-3/12  w-11/12 my-1">
              <HotelInput
                desc={"目的地/酒店名称"}
                value={placeValue}
                setValue={setPlaceValue}
              />
            </div>
            {isOpen || currentWidth ? (
              <div className="border-[1px] lg:w-3/12">
                <DatePick
                  value={dateValue}
                  setValue={setDateValue}
                  leftStyle={true}
                />
              </div>
            ) : (
              <>
                <div className="border-[1px] w-11/12 my-1">
                  <DatePicker
                    bordered={false}
                    defaultValue={dayjs()}
                    format={dateFormat}
                    suffixIcon={null}
                  />
                </div>
                <div className="border-[1px] w-11/12 my-1">
                  <DatePicker
                    bordered={false}
                    defaultValue={dayjs().add(1, "day")}
                    format={dateFormat}
                    suffixIcon={null}
                  />
                </div>
              </>
            )}

            <div className="border-[1px]  lg:w-2/12  w-11/12 my-1">
              <GuestSelect setRoom={setRoomData} />
            </div>
            <div className="border-[1px] fontlarge lg:w-3/12 lg:h-[60px] w-11/12 lg:my-0 my-1">
              <Input
                placeholder="机场火车站酒店名称"
                bordered={false}
                onChange={(e) => setExtraInfo(e.currentTarget.value)}
                className="lg:mt-4"
              ></Input>
            </div>
            <div className="border-[1px] lg:w-1/12 w-1/2 my-1 lg:h-[60px] lg:my-0">
              <Link href={"https://hotels.ctrip.com/hotels/list"}>
                <button className="bg-blue-600 w-full h-full">
                  <SearchOutlined className="text-white text-2xl" />
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:py-4 py-2">
            <GroupSelect setHotelStart={setHotelStart} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InternationalSelect;
