"use client"

import { cn } from "@/lib/utils";
import { Select } from "antd";
import { FunctionComponent, useEffect, useState } from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

interface OrderTabsProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  category: string
}

const categoryName:{
  all: string
  flight: string
  hotel: string
  trip: string
  train: string
  [index: string]: string;   //索引签名
} = {
  all: '全部订单',
  flight: '机票+相关',
  hotel: '酒店',
  trip: '旅游度假',
  train: '火车票'
}

const OrderTabs: FunctionComponent<OrderTabsProps> = ({ category, className }) => {
  const [currentCategory, setCurrentCategory] = useState(categoryName[category])
  const [activatedTab, setActivatedTab] = useState('全部订单')
  const [open, setopen] = useState<boolean>(false);

  useEffect(() => {
    // fetch   currentCategory + activatedTab
  }, [currentCategory, activatedTab])

  const SelectItem = ({ title, className }: {
    title: string
    className: string
  }) => {
    return (
      <div className={cn("w-24 mx-auto cursor-pointer rounded-md border-2", className, {
          'bg-blue-500 text-slate-50': title === currentCategory
        })}
        onClick={() => setCurrentCategory(title)}>
        <span className="text-xs block w-20 mx-auto my-[4px] text-center">{title}</span>
      </div>
    )
  }

  const CategorySelect = () => {
    return (
      <div>
        <div className="grid columns-3 mt-5">
          <SelectItem className='col-start-1 col-span-1' title={"全部订单"} />
          <div className='w-24 col-start-2 col-span-1'></div>
          <div className='w-24 col-start-3 col-span-1'></div>
        </div>

        <div className="my-3 ml-4 text-gray-400">旅行产品</div>

        <div className="grid columns-3 mb-3">
          <SelectItem className='col-start-1 col-span-1' title={"机票+相关"} />
          <SelectItem className='col-start-2 col-span-1' title={"酒店"} />
          <SelectItem className='col-start-3 col-span-1' title={"旅游度假"} />
        </div>
        <div className="grid columns-3 mb-3">
          <SelectItem className='col-start-1 col-span-1' title={"火车票"} />
          <div className='w-24 col-start-2 col-span-1'></div>
          <div className='w-24 col-start-3 col-span-1'></div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(className, 'dark:text-slate-50')}>
      <div className="flex flex-row relative h-10">
        <div
          className={cn("w-32 h-full cursor-pointer mr-2 border-2", {
            'text-blue-600 border-blue-600 border-b-white dark:border-b-slate-900 z-10': activatedTab === '全部订单'
          })}
          onClick={() => setActivatedTab('全部订单')}>
          <span className={cn("block text-center text-lg h-7 mx-auto my-1")}>全部订单</span>
        </div>
        <div
          className={cn("w-32 h-full cursor-pointer mr-2 border-2", {
            'text-blue-600 border-blue-600 border-b-white dark:border-b-slate-900 z-10': activatedTab === '未出行'
          })}
          onClick={() => setActivatedTab('未出行')}>
          <span className={cn("block text-center text-lg h-7 mx-auto my-1")}>未出行</span>
        </div>
        <div
          className={cn("w-32 h-full cursor-pointer mr-2 border-2", {
            'text-blue-600 border-blue-600 border-b-white dark:border-b-slate-900 z-10': activatedTab === '待支付'
          })}
          onClick={() => setActivatedTab('待支付')}>
          <span className={cn("block text-center text-lg h-7 mx-auto my-1")}>待支付</span>
        </div>
        <div
          className={cn("w-32 h-full cursor-pointer mr-2 border-2", {
            'text-blue-600 border-blue-600 border-b-white dark:border-b-slate-900 z-10': activatedTab === '待点评'
          })}
          onClick={() => setActivatedTab('待点评')}>
          <span className={cn("block text-center text-lg h-7 mx-auto my-1")}>待点评</span>
        </div>
        <div className="w-full h-0 z-0 absolute bottom-0 border-t-2 border-blue-600" />
      </div>

      {
        activatedTab === '全部订单' ?
          <div>
            <span>订单类型</span>
            <Select
              open={open}
              value={currentCategory}
              // onFocus={() => setopen(true)}
              bordered={false}
              dropdownMatchSelectWidth={false}
              onMouseDown={() => setopen(true)}
              onBlur={() => setTimeout(() => {
                setopen(false)
              }, 500)}
              placement="bottomLeft"
              suffixIcon={
                open ? (
                  <CaretUpOutlined style={{ color: "#007aff" }} />
                ) : (
                  <CaretDownOutlined />
                )
              }
              className="mt-7 ml-5 w-32 rounded-md border dark:bg-slate-500"
              dropdownRender={CategorySelect}
              popupClassName="w-[25%]"
            />
          </div> : null
      }

      <div className="w-full h-48 mt-5 py-20 rounded-lg bg-gray-200">
        <div className="text-sm text-center mx-auto dark:text-gray-800">暂时没有相关订单</div>
      </div>
    </div>
  );
}

export default OrderTabs;