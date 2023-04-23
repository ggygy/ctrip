import { businessData } from "@/public/data/businessTravel";
import { FunctionComponent } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BusinessTravelProps {}

const BusinessTravel: FunctionComponent<BusinessTravelProps> = () => {
  return (
    <>
      <div className="text-black font-medium text-xl  mt-10 lg:ml-0 ml-4 dark:text-white">
        企业商旅
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {businessData.map((i, index) => (
          <a
            key={index}
            className={cn(
              "flex flex-wrap rounded-lg lg:mr-5 h-28 mt-2 cursor-pointer ",
              {
                "bg-blue-50": index === 0,
                "bg-orange-50": index === 1,
                "bg-green-50": index === 2,
              }
            )}
          >
            <div className="flex w-1/5 h-full justify-center items-center">
              {/* <img src={i.url} alt={i.title} className="w-11 h-11" /> */}
              <Image src={i.url} alt={i.title} width={44} height={44}></Image>
            </div>

            <div className="flex flex-wrap w-4/5">
              <div className="block font-medium text-base leading-5 text-primary mt-5">
                {i.title}
              </div>
              <div className="block text-sm font-normal max-w-full leading-5 text-gray-666">
                {i.desc}
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default BusinessTravel;
