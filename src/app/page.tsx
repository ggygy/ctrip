// import Image from 'next/image'
// import Link from 'next/link'
import { BussinessInfo } from '@/components/bussinessInfo'
import HotelOrder from '@/components/ui/hotelOrder'
import Rotation from '@/components/ui/rotation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '仿携程PC大首页',
  description: '携程旅行官网：酒店预订、机票预订查询、旅行度假',
}

export default async function Home() {

  return (
    <div className="w-0 h-0 overflow-hidden lg:w-full lg:h-full">
      <div className="flex flex-wrap">
        <div className="flex flex-col w-3/5 h-full border-2">
          <HotelOrder />

          <Rotation />
        </div>
        <div className="flex flex-col w-2/5 h-full bg-black "></div>
      </div>

      <div>
        <BussinessInfo />
      </div>
    </div>
  )
}
