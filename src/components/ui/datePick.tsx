"use client";
import { cn } from "@/lib/utils";
import { DatePicker, Divider } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import { FunctionComponent, useState } from "react";

dayjs.locale("zh-cn");
const { RangePicker } = DatePicker;

const dateFormat = "MM月DD日";
interface DatePickProps {
  value: any;
  setValue: any;
  leftStyle?: boolean;
}
const festivalDataFour = [
  {
    day: "04月05日",
    festival: "清明节",
  },
  {
    day: "04月29日",
    festival: "劳动节",
  },
  {
    day: "04月30日",
    festival: "劳动节",
  },
];

const festivalDataFive = [
  {
    day: "05月01日",
    festival: "劳动节",
  },
  {
    day: "05月02日",
    festival: "劳动节",
  },
  {
    day: "05月03日",
    festival: "劳动节",
  },
];
const fesDate = [
  "04月05日",
  "04月29日",
  "04月30日",
  "05月01日",
  "05月02日",
  "05月03日",
];
const DatePick: FunctionComponent<DatePickProps> = ({
  value,
  setValue,
  leftStyle = false,
}) => {
  const [stayTime, setStayTime] = useState<number>(1);

  const footerRender = () => {
    return (
      <>
        <div className="flex justify-between w-full">
          <div className="w-1/2 ml-8">
            {festivalDataFour.map((i) => (
              <div key={i.day} className="flex flex-nowrap">
                <div className="w-1 h-1 rounded-full bg-red-600 mt-4 mx-1"></div>
                <div>
                  {i.day} {i.festival}
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2 ml-8">
            {festivalDataFive.map((i) => (
              <div key={i.day} className="flex flex-nowrap">
                <div className="w-1 h-1 rounded-full bg-red-600 mt-4 mx-1"></div>
                {i.day} {i.festival}
              </div>
            ))}
          </div>
        </div>

        <Divider />
        <div className="flex flex-col justify-center items-center p-2">
          <div className="text-sm leading-4 font-bold">
            {value[0].format("MM月DD日")} – {value[1].format("MM月DD日")}(
            {stayTime} 晚)
          </div>
          <div className="text-xs leading-4 text-gray-400">
            入住和退房时间均为酒店当地时间。
          </div>
        </div>
      </>
    );
  };
  const changeHandle = (data: any) => {
    setStayTime(Math.abs(data[0].diff(data[1], "day")));
    setValue(data);
  };
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };

  return (
    <div className="relative flex flex-col ">
      <div className="flex justify-between">
        <div className="mx-4 text-left text-gray-500 rounded-md">入住</div>
        <div className="mx-4 text-left  text-gray-500 rounded-md">退房</div>
      </div>
      <div
        className={cn("text-left absolute font-bold top-1/3 ", {
          "left-32": leftStyle == false,
          "left-24": leftStyle == true,
        })}
      >
        - {stayTime} 晚-
      </div>

      <RangePicker
        suffixIcon={null}
        disabledDate={disabledDate}
        bordered={false}
        format="MM月DD日"
        cellRender={(current) => {
          let flag = false;
          if (fesDate.includes(current.format("MM月DD日"))) {
            flag = true;
          }
          return (
            <div
              className={cn("ant-picker-cell-inner", {
                "ant-picker-custom": flag,
              })}
            >
              {current.date()}
            </div>
          );
        }}
        defaultValue={[
          dayjs(dayjs(), dateFormat),
          dayjs(dayjs().add(1, "day"), dateFormat),
        ]}
        onChange={(e) => changeHandle(e)}
        allowClear={false}
        className="w-full"
        renderExtraFooter={() => footerRender()}
      />
    </div>
  );
};

export default DatePick;
