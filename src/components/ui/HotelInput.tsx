import { cn } from "@/lib/utils";
import { Select } from "antd";
import { useState } from "react";
import { places } from "../../../public/data/hotelData";
interface HotelInputType {
  desc: string;
  value: any;
  setValue: (s: string) => void;
}
export const HotelInput = (props: HotelInputType) => {
  const { desc, value, setValue } = props;
  const [open, setopen] = useState<boolean>(false);
  const placeRender = () => {
    return (
      <div className={cn(" bg-white block rounded-lg z-50 ")}>
        {places.map((place, index) => (
          <div key={index}>
            <div className="bg-gray-200 text-left p-1 rounded-md">
              {place.desc}
            </div>
            <ul>
              {place.data.map((d, index) => (
                <li
                  key={index}
                  className="inline-block hover:bg-blue-100 rounded-md text-center cursor-pointer w-1/5 text-clip"
                  onClick={(e) => {
                    setValue(d);
                    setopen(false);
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
  return (
    <>
      <label className="absolute text-gray-500 text-sm text-ellipsis mt-1 ml-1">
        {desc}
      </label>

      <Select
        showSearch
        open={open}
        onMouseDown={() => setopen(true)}
        value={value}
        onBlur={() => {
          setTimeout(() => {
            setopen(false);
          }, 100);
        }}
        placeholder="城市、机场、区域、地标或酒店名称"
        bordered={false}
        showArrow={false}
        placement="bottomLeft"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{
          width: "30%",
        }}
        onChange={(e) => {
          // console.log("e", e);
          setValue(e);
        }}
        style={{
          fontWeight: "700",
        }}
        className=" w-[90%] pt-7 px-4 font-bold "
        dropdownRender={placeRender}
      />
    </>
  );
};
