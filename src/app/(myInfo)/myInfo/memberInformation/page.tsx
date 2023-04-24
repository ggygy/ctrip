import { authOptions } from "@/lib/auth";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: '用户信息-携程旅行官网',
  description: '携程旅行官网：酒店预订、机票预订查询、旅行度假',
}

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className="w-full h-full dark:bg-slate-900">
      <div className="w-full h-10 justify-start ml-5 text-base dark:text-slate-50">
        <div>邮箱：{session!.user.email}</div>
        <div>用户ID：{session!.user.id}</div>
      </div>
    </div>
  );
}
