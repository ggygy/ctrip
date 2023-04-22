import { cn } from "@/lib/utils";
import { FunctionComponent, useState } from "react";

interface GroupSelectProps {}

const GroupSelect: FunctionComponent<GroupSelectProps> = () => {
  const [value, setValue] = useState<string[]>([]);
  const startDatas = [
    {
      value: "TWO",
      desc: "二星（钻）及以下",
    },
    {
      value: "THREE",
      desc: "三星（钻）",
    },
    {
      value: "FOUR",
      desc: "四星（钻）",
    },
    {
      value: "FIVE",
      desc: "五星（钻）",
    },
  ];
  const changeSelect = (s: string) => {
    if (value.includes(s)) {
      const v = value.filter((i) => i !== s);
      setValue(v);
    } else {
      const v = [];
      v.push(...value, s);
      setValue(v);
    }
  };
  return (
    <div className="flex flex-nowrap">
      <div className="mt-2">星级/钻级</div>
      <div className="flex flex-nowrap cursor-pointer">
        {startDatas.map((i) => (
          <div
            className={cn(
              "flex justify-center items-center mx-2  text-xs p-2",
              {
                "bg-orange-400 text-white": value.includes(i.value),
                "bg-gray-100 text-black": !value.includes(i.value),
              }
            )}
            key={i.value}
            onClick={() => changeSelect(i.value)}
          >
            {i.desc}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupSelect;
