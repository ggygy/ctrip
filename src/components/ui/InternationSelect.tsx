import { FunctionComponent, useState } from "react";
import { HotelInput } from "./HotelInput";
import { Card, DatePicker, Input } from "antd";
import GuestSelect from "./GuestSelect";
import GroupSelect from "./GroupSelect";
import { SearchOutlined } from "@ant-design/icons";
interface InternationalSelectProps {}

const InternationalSelect: FunctionComponent<InternationalSelectProps> = () => {
  const [placeValue, setPlaceValue] = useState("上海");

  const { RangePicker } = DatePicker;

  return (
    <div className="flex bg-white justify-center  absolute w-11/12 mt-24">
      <div className="w-full  ">
        <Card>
          <div className="flex flex-nowrap ">
            <div className="border-[2px] w-3/12">
              <HotelInput
                desc={"目的地/酒店名称"}
                value={placeValue}
                setValue={setPlaceValue}
              />
            </div>
            <div className="border-[2px] w-3/12">
              <RangePicker
                suffixIcon={null}
                bordered={false}
                className="w-full h-full"
              />
            </div>
            <div className="border-[2px] w-2/12">
              <GuestSelect />
            </div>
            <div className="border-[2px] w-3/12">
              <Input
                placeholder="机场火车站酒店名称"
                className="h-8"
                bordered={false}
              ></Input>
            </div>
            <div className="border-[2px] w-1/12">
              <button className="bg-blue-600 w-full h-full">
                <SearchOutlined className="text-white text-2xl" />
              </button>
            </div>
          </div>
          <div className="py-4">
            <GroupSelect />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InternationalSelect;
