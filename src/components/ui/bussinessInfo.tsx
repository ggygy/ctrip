"use client";
import clsx from "clsx";
import {
  businessData,
  safeGuardData,
  joinData,
  partnerData,
  navData,
} from "./data/businessTravel";
import { Footer } from "antd/es/layout/layout";
import Footers from "./footers";

const businessTravel = () => {
  return (
    <div className="m-10 ">
      <div className="text-black font-medium text-xl ml-3">企业商旅</div>

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {businessData.map((i, index) => (
          <a
            key={index}
            className={clsx(
              "flex flex-wrap rounded-lg mr-5 h-28 mt-2 cursor-pointer ",
              {
                "bg-blue-50": index === 0,
                "bg-orange-50": index === 1,
                "bg-green-50": index === 2,
              }
            )}
          >
            <div className="flex w-1/5 h-full justify-center items-center">
              <img src={i.url} alt={i.title} className="w-11 h-11" />
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
    </div>
  );
};

const safeGuard = () => {
  return (
    <div className="m-10 ">
      <div className="px-3 font-medium leading-5 text-xl">携程旅行保障</div>
      <div className="flex flex-wrap mt-4">
        {safeGuardData.map((i) => {
          return (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center">
              {i.data.map((d, index) => (
                <div
                  key={index}
                  className="flex w-60 h-24 justify-center item-center  mt-4 "
                >
                  <div className="flex h-full justify-center items-center">
                    <img src={d.url} alt={d.alt} className="w-11 h-11" />
                  </div>

                  <div className="w-48 pl-4 h-full text-left flex flex-col justify-center items-center">
                    <div className="font-medium leading-5 text-base">
                      {d.alt}
                    </div>
                    <div className="text-sm font-normal leading-5 mt-1 text-gray-999">
                      {d.desc.map((j) => {
                        return <p>{j}</p>;
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const join = () => {
  return (
    <div className="m-10 grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center">
      {joinData.map((i, index) => (
        <a href={i.link} className="m-3 grid " key={index}>
          <img
            src={i.url}
            alt={i.alt}
            className=" box-content overflow-clip justify-around"
          />
        </a>
      ))}
    </div>
  );
};

const partner = () => {
  return (
    <div className="m-10  pr-2 hidden md:block">
      <div className="font-medium text-xl leading-6 text-primary px-3">
        合作伙伴
      </div>
      <div className="mt-4  overflow-hidden flex flex-row">
        {partnerData.map((i, index) => (
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full">
            <a
              href={i.href}
              key={index}
              className={clsx(
                "w-20  h-8 inline-block bg-partner bg-no-repeat text-xs leading-7  m-auto"
              )}
              style={{
                backgroundPosition: i.position,
              }}
            ></a>
          </div>
        ))}
      </div>
    </div>
  );
};

const nav = () => {
  return (
    <div className="box-border block ml-10">
      {navData.map((i) => (
        <div className=" flex flex-row mt-3">
          <div className="text-primary font-semibold mr-6 leading-5 text-xs w-12 h-8 whitespace-nowrap mt-1">
            {i.title}
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex  flex-wrap cursor-pointer">
              {i.data.map((d) => (
                <a
                  href={d.href}
                  className="block text-ellipsis max-w-6xl min-w-[80px] min-h-[20px] max-h-30 font-normal text-gray-666  overflow-hidden ml-1 text-xs mt-1"
                >
                  {d.alt}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const BussinessInfo = () => {
  return (
    <div className="max-w-[1180px] content-center">
      {businessTravel()}
      {safeGuard()}
      {join()}
      {partner()}
      {nav()}
      <Footers />
    </div>
  );
};
