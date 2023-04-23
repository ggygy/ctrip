import { safeGuardData } from "@/public/data/businessTravel";
import { FunctionComponent } from "react";
import Image from "next/image";

interface SafeGuardProps {}

const SafeGuard: FunctionComponent<SafeGuardProps> = () => {
  return (
    <>
      <div className=" font-medium leading-5 text-xl mt-4 lg:ml-0 ml-4 dark:text-white">
        携程旅行保障
      </div>
      <div className="flex flex-wrap mt-2 dark:text-gray-200">
        {safeGuardData.map((i, index) => {
          return (
            <div
              key={index}
              className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center"
            >
              {i.data.map((d, ind) => (
                <div
                  key={ind}
                  className="flex w-60 h-24 justify-center item-center  mt-4 "
                >
                  <div className="flex h-full justify-center items-center">
                    {/* <img src={d.url} alt={d.alt} className="w-11 h-11" /> */}
                    <Image
                      src={d.url}
                      alt={d.alt}
                      width={44}
                      height={44}
                    ></Image>
                  </div>

                  <div className="w-48 pl-4 h-full text-left flex flex-col justify-center items-center">
                    <div className="font-medium leading-5 text-base">
                      {d.alt}
                    </div>
                    <div className="text-sm font-normal leading-5 mt-1 text-gray-999 dark:text-gray-400">
                      {d.desc.map((j, jind) => {
                        return <p key={jind}>{j}</p>;
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SafeGuard;
