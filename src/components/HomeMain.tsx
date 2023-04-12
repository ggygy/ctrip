'use client'

import { FunctionComponent } from "react";
import { BussinessInfo } from '@/components/ui/bussinessInfo'
import { useSelector } from 'react-redux';
import HotelOrder from '@/components/ui/hotelOrder'
import Rotation from '@/components/ui/rotation'

interface HomeMainProps {
  
}
 
const HomeMain: FunctionComponent<HomeMainProps> = () => {
  const { isOpen } = useSelector((store: any) => store.menuState);
  return ( 
    isOpen ?
    <div className="w-full h-full">
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
    : null
   );
}
 
export default HomeMain;