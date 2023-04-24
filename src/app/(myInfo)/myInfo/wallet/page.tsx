import { authOptions } from "@/lib/auth";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: '我的钱包-携程旅行官网',
  description: '携程旅行官网：酒店预订、机票预订查询、旅行度假',
}

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className="w-full h-full lg:ml-2 dark:bg-slate-900 dark:text-slate-100">
      <div
        className="w-full h-24 relative"
        style={{ background: 'url("https://secure.ctrip.com/webwallet/Images/v3/wallet_account.png") center center / contain no-repeat' }}
      >
        <span className="absolute top-5 left-36 text-2xl font-bold text-slate-50">我的钱包</span>
        <span className="absolute top-14 left-36 text-xl font-bold text-slate-50">用户 ID：{session!.user.email}</span>
      </div>
      <div className="grid grid-cols-8">
        <div className="col-start-1 col-span-3 border">
          <div className="flex flex-row justify-center mt-5">
            <span className="text-base">现金余额</span>
            <span className="text-sm ml-5 mt-1 text-gray-400 block">不可用余额： 0.00元</span>
          </div>
          <div className="flex flex-row justify-center my-3">
            <span className="text-sm"><span className=" text-2xl text-orange-400">0</span><span className="text-orange-400">.00</span>元</span>
            <button className="text-sm ml-28 px-3 py-[1px] rounded-md text-gray-400 block border hover:bg-gray-50">提 现</button>
          </div>
        </div>

        <div className="col-start-4 col-span-3 border">
          <div className="flex flex-row ml-8 mt-5">
            <span className="text-base">礼品卡余额</span>
            <span className="text-sm ml-5 mt-1 text-gray-400 block"></span>
          </div>
          <div className="flex flex-row justify-center my-3">
            <span className="text-sm"><span className=" text-2xl text-orange-400">0</span><span className="text-orange-400">.00</span>元</span>
            <button className="text-sm ml-28 px-3 py-[1px] rounded-md text-gray-400 block border hover:bg-gray-50">领 用</button>
          </div>
        </div>

        <div className="col-start-7 col-span-2 border"></div>
      </div>
    </div>
  );
}
