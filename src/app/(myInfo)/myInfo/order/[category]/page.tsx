import type { Metadata } from "next";
import OrderTabs from "@/components/OrderTabs";

export const metadata: Metadata = {
  title: '机票+相关订单-携程旅行官网',
  description: '携程旅行官网：酒店预订、机票预订查询、旅行度假',
}

export default async function Home({ params }: { params: { category: string } }) {


  return (
    <div className="w-full h-full ml-3 dark:bg-slate-900 dark:text-slate-50">
      <div className="flex flex-row text-xs rounded-sm border-2">
        <div className="ml-2 my-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
        </div>
        <span className="block ml-2 leading-9 truncate">您可以在线查看近一年订单，如需查找更久之前的订单，请至携程app或致电95010；您也可以使用右边下载功能下载历史所有订单</span>
      </div>

      <OrderTabs className="mt-5" category={params.category} />
    </div>
  );
}
