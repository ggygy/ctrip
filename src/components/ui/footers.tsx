"use client";
import { FunctionComponent } from "react";
import {
  copyrightData,
  policePosition,
  sumNavData,
  telData,
} from "./data/businessTravel";

interface Props {}

const Footers: FunctionComponent<Props> = () => {
  const footerNavRender = () => {
    return (
      <div className="pt-10 pb-13 bg-footer flex-row flex ">
        {sumNavData.map((i) => (
          <div className="flex  box-border border-r-[1px] border-solid border-gray-200 ">
            <div className="float-left inline-block max-w-[217px] ml-6">
              <div>{i.title}</div>
              <div className="grid grid-cols-2">
                {i.data.map((d, index) => (
                  <div className="relative float-left min-w-26 text-left mr-2 mt-3">
                    <a
                      key={index}
                      className="text-gray-666  font-normal  overflow-hidden ml-1 text-xs hover:text-blue-400"
                      href={d.href}
                    >
                      {d.alt}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className=" ml-5  mt-10">
          {telData.map((i) => (
            <div className="mt-2 flex-row flex">
              <div className="font-normal  overflow-hidden ml-1 text-xs text-gray-666">
                {i.title}
              </div>
              <div className="flex  flex-col">
                {i.data.map((d) => (
                  <span className="font-normal  overflow-hidden ml-1 text-xs pl-4 text-gray-666">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:flex  hidden flex-col">
          <div className="  ml-10 pt-7">
            <img
              src=" https://pic.c-ctrip.com/platform/online/home/er_ctrip_app.jpg"
              alt=" 携程APP"
              className=""
            />
          </div>
          <div className="ml-8">扫码下载携程App</div>
        </div>
      </div>
    );
  };
  const copyrightRender = () => {
    return (
      <div className=" flex-col justify-center items-center mt-8 min-w-[830px] invisible md:flex">
        {copyrightData.map((i) => (
          <div className="flex flex-row text-xs leading-6 text-gray-999 font-normal  overflow-hidden">
            {i.data.map((d, index) => {
              if (d.href !== "/") {
                return (
                  <>
                    {index !== 0 && <div className=" ml-1 ">|</div>}
                    <a href={d.href} className=" hover:text-blue-400 ">
                      {d.title}
                    </a>
                  </>
                );
              } else {
                return (
                  <>
                    {index !== 0 && <div className="ml-1 pt-[1px]">|</div>}
                    <div className=" ml-1 pt-[1px]">{d.title}</div>
                  </>
                );
              }
            })}
          </div>
        ))}
      </div>
    );
  };
  const policeRender = () => {
    return (
      <div className="mt-4 hidden md:block">
        <div className=" flex flex-row justify-center ">
          {policePosition.map((i, index) => (
            <div className="">
              <a
                href={i.href}
                key={index}
                className="mx-1  border-solid border-gray-400 border-[1px] block bg-no-repeat"
                style={{
                  backgroundImage: `url(${i.href})`,
                  backgroundPosition: i.position,
                  width: i.weight,
                  height: "32px",
                  float: "right",
                  backgroundSize: i.backgroundSize,
                }}
              >
                {/* {i.alt} */}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className=" mt-10 px-5 flex flex-col">
      {footerNavRender()}
      {copyrightRender()}
      {policeRender()}
    </div>
  );
};

export default Footers;
