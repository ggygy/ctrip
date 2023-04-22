import { cn } from "@/lib/utils";
import { regionData } from "@/public/data/regionSelect";
import Image from "next/image";
import { FunctionComponent } from "react";

interface RegionSelectProps {}

const RegionSelect: FunctionComponent<RegionSelectProps> = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-nowrap justify-start">
        <Image
          src="https://pic.c-ctrip.com/hotelinternational121211/affili_380_65.jpg"
          alt=""
          width={379}
          height={64}
          className="mr-6"
        />
        <Image
          src="https://pic.c-ctrip.com/hotelinternational121211/affili_380_65_2.jpg"
          alt=""
          width={379}
          height={64}
          className="mr-6"
        />
      </div>
      <div className="border-[1px]  mt-8">
        {regionData.map((item, index) => (
          <div key={item.title} className="flex flex-nowrap p-1 cursor-pointer">
            <div
              className={cn(
                "  w-1/12  font-bold text-xs leading-5 text-gray-600 mt-1",
                { "border-b-[1px]": index != 2 }
              )}
            >
              {item.title}
            </div>
            <div
              className={cn(
                "  w-11/12 text-xs  leading-5 text-gray-400 flex  flex-wrap",
                {
                  "border-b-[1px]": index != 2,
                }
              )}
            >
              {item.region.map((i) => (
                <a
                  key={i}
                  className="block p-1 max-w-6xl min-w-[80px] min-h-[20px] max-h-30"
                  href={item.href}
                >
                  {i}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionSelect;
