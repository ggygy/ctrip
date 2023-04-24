import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: '机票+相关订单-携程旅行官网',
  description: '携程旅行官网：酒店预订、机票预订查询、旅行度假',
}

export default async function Home() {


  return (
    <div className="w-full h-full dark:bg-slate-900 lg:ml-2">
      <div className="flex flex-row relative">
        <span className="text-base text-center font-semibold text-blue-400">
          积分概况
        </span>
        <Link target="_blank"
          className="text-xs text-center text-blue-400 absolute right-0"
          href={'http://help.ctrip.com/QuestionList.aspx?parentId=10&directoryId=98'}>积分说明</Link>
      </div>

      <hr className="bg-blue-400 mt-1 h-[2px]"/>

      <div className="w-full flex flex-row">
        <div className="w-1/2 px-3 flex flex-col border-2">
          <span className="text-sm dark:text-slate-50">当前总积分</span>
          <span className="ml-3 text-3xl text-green-600">0</span>
        </div>
        <div className="w-1/2 px-3 border-2">
          <div className="w-32 mx-auto mt-3 bg-orange-400 rounded-md">
            <span className="block w-28 mx-auto text-lg font-bold text-center text-slate-50">积分兑换好礼</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-10 relative">
        <span className="text-base text-center font-semibold text-blue-400">
          积分明细
        </span>
        <Link target="_blank"
          className="text-xs text-center text-blue-400 absolute right-0"
          href={'http://help.ctrip.com/QuestionList.aspx?parentId=10&directoryId=98'}>下载全部</Link>
      </div>

      <hr className="bg-blue-400 mt-1 h-[2px]"/>
    </div>
  );
}
