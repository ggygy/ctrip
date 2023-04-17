import { Divider, Select } from "antd";
import { FunctionComponent, useEffect, useState } from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import CountOption from "./CountOption";
interface GuestSelectProps {}

const GuestSelect: FunctionComponent<GuestSelectProps> = () => {
  const [roomCount, setroomCount] = useState<number>(1);
  const [adultCount, setadultCount] = useState<number>(1);
  const [childCount, setchildCount] = useState<number>(0);
  const [open, setopen] = useState<boolean>(false);
  useEffect(() => {
    if (adultCount < roomCount) {
      setadultCount(roomCount);
    }
    if (adultCount > roomCount * 8) {
      setadultCount(roomCount * 8);
    }
    // if()
  }, [roomCount]);

  const option = [...Array(18)].map((i, index) => {
    if (index) {
      return { value: index, label: index };
    } else {
      return { value: "<1", label: "<1" };
    }
  });
  const selectAge = () => {
    return (
      <Select
        defaultValue="<1"
        // style={{ width: 120 }}
        // onChange={handleChange}
        options={option}
      />
    );
  };
  const adjustOption = () => {
    return (
      <div>
        <div className="px-4 py-5 flex flex-col ">
          <CountOption
            count={roomCount}
            setCount={setroomCount}
            title="房间"
            subtitle=""
            mincount={0}
            maxcount={20}
          />
          <CountOption
            count={adultCount}
            setCount={setadultCount}
            title="成人"
            subtitle="18岁及以上"
            mincount={roomCount}
            maxcount={roomCount * 8}
          />
          <CountOption
            count={childCount}
            setCount={setchildCount}
            title="儿童"
            subtitle="17岁及以下"
            mincount={0}
            maxcount={roomCount * 6}
          />
          {childCount !== 0 && (
            <div>
              <div>
                <span>儿童年龄</span>
                <span className="pl-1 text-xs text-gray-400">
                  以入住当天计算
                </span>
              </div>
              <div className="overflow-scroll flex flex-row flex-wrap w-full h-20">
                {[...Array(childCount)].map((item, index) => (
                  <div key={index} className="w-[45%] m-1">
                    {selectAge()}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <Divider style={{ margin: "0 2px" }} />
        <div className="flex justify-end">
          <button
            className="text-blue-500 mx-4 b-4"
            onClick={() => setopen(false)}
          >
            确定
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap">
      <label className="absolute text-gray-500 text-sm text-ellipsis mt-2 ml-2">
        {"房间及主客"}
      </label>
      <Select
        open={open}
        value={`${roomCount}间 ${adultCount + childCount}位`}
        // onFocus={() => setopen(true)}
        bordered={false}
        dropdownMatchSelectWidth={false}
        onMouseDown={() => setopen(true)}
        placement="bottomLeft"
        suffixIcon={
          open ? (
            <CaretUpOutlined style={{ color: "#007aff" }} />
          ) : (
            <CaretDownOutlined />
          )
        }
        className="mt-7 w-full"
        dropdownRender={adjustOption}
        popupClassName="w-[17%]"
      />
    </div>
  );
};

export default GuestSelect;
