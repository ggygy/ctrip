"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

interface AsideProps 
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  
}
 
const Aside: FunctionComponent<AsideProps> = ({className}) => {
  const pathname = usePathname();
  
  const navList = [
    {
      title: '积分',
      href: '/myInfo/memberPoints'
    },
    {
      title: '钱包',
      href: '/myInfo/wallet'
    },
    {
      title: '收藏',
      href: '/myInfo/collection'
    },
    {
      title: '订单',
      href: '/myInfo/order/all'
    },
    {
      title: '常用信息',
      href: '/myInfo/memberInformation'
    },
    {
      title: '会员商城',
      href: '/myInfo/memberMall'
    },
  ]
  return ( 
    <div className={cn(className, 'flex flex-col bg-sky-50 border-2 border-gray-100 dark:bg-slate-500 dark:text-slate-50')}>
      {
        navList && navList.map((item) => {
          return (
            <Link
              className={cn('w-full h-10 text-center flex flex-row', {
                'bg-white text-blue-600 dark:bg-slate-400': pathname === item.href
              })}
              key={item.title}
              href={item.href}>
                <div className={cn("w-1 h-full", {'bg-blue-500': pathname === item.href})}></div>
                <div className="text-base h-6 mx-auto mt-2">{item.title}</div>
            </Link>
          )
        })
      }
    </div>
  );
}
 
export default Aside;