import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '收藏夹-携程旅行官网',
  description: '携程旅行官网：酒店预订、机票预订查询、旅行度假',
}

export default async function Home() {


  return (
    <div className="w-full h-full lg:ml-3 dark:bg-slate-900">
      <div className="flex flex-row h-16 bg-slate-50 dark:bg-slate-500 dark:text-slate-50 border">
        <div className="w-1/6 my-auto justify-center border-spacing-1">
          <span className="block h-6 text-center">全部</span>
        </div>
        <div className="w-1/6 my-auto justify-center">
          <span className="block h-6 text-center">酒店</span>
        </div>
      </div>
    </div>
  );
}
