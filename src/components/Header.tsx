"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Service from "@/ui/Service";
import MobileDownload from "@/ui/MobileDownload";
import Order from "@/ui/Order";
import { FunctionComponent } from "react";
import { setIsopen } from "@/lib/store/menuStateSlice";
import { Input, Button, Tooltip } from "antd";
import {
  PicLeftOutlined,
  UserOutlined,
  HeartOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { cn } from "@/lib/utils";

interface HeaderProps {}

const { Search } = Input;

const Header: FunctionComponent<HeaderProps> = () => {
  const dispatch = useDispatch();
  const onSearch = (value: string) => console.log(value);

  return (
    <div className={cn("flex flex-col lg:flex-row lg:h-12")}>
      <div className="my-auto flex flex-row justify-center lg:justify-start">
        <Image
          className="pointer-events-none block lg:my-auto lg:h-8"
          style={{width: "auto", height: "auto"}}
          src={"/logo.png"}
          width={160}
          height={25}
          alt={""}
        />

        <Button
          type="text"
          className={cn("block ml-16 dark:bg-slate-700 lg:ml-0 lg:invisible")}
          icon={<PicLeftOutlined />}
          onClick={() => dispatch(setIsopen())}
          size={"large"}
        />
      </div>

      <Search
        className={cn(
          "w-64 mt-5 mx-auto justify-center lg:w-72 lg:my-auto lg:justify-start lg:ml-0 lg:mr-0"
        )}
        placeholder="搜索旅行地/酒店/旅游/景点门票/交通"
        onSearch={onSearch}
        enterButton
      />

      <div className="flex flex-row justify-center select-none mt-3 ml-2 lg:mt-0 lg:w-5/12 lg:ml-36">
        <div className="flex flex-row">
          <ThemeToggle className="dark:bg-slate-700 dark:border-slate-700 rounded-sm my-auto align-middle" />

          <div className="bg-slate-100 w-20 my-auto ml-4 pl-2 h-7 leading-7 rounded-2xl hover:cursor-pointer hover:text-sky-700">
            <UserOutlined />
            <span className="text-sm ml-1">请登录</span>
          </div>

          <Order />
        </div>

        <div className="w-0 h-0 overflow-hidden lg:w-3 lg:h-5 my-auto border-r-2 border-gray-200 dark:border-gray-500"></div>

        <div className="flex flex-row w-0 invisible lg:w-auto lg:visible">
          <Service className="my-auto ml-4 cursor-pointer dark:text-slate-50" />
          <MobileDownload className="my-auto ml-4 mr-3 cursor-pointer dark:text-slate-50" />
        </div>

        <div className="w-3 h-0 lg:h-5 my-auto border-r-2 border-gray-200 dark:border-gray-500"></div>

        <div className="flex flex-row w-0 invisible lg:w-auto lg:visible dark:text-slate-50">
          <Tooltip placement="bottom" title={"无障碍阅读"}>
            <div className="my-auto ml-4 cursor-pointer">
              <HeartOutlined />
            </div>
          </Tooltip>
          <Tooltip placement="bottom" title={"关怀版"}>
            <div className="my-auto ml-4 cursor-pointer">
              <Link
                target="_blank"
                href={
                  "https://aria.ctrip.com/html5/aging.html?isHideNavBar=YES"
                }
              >
                <SmileOutlined />
              </Link>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Header;
