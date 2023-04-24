// import International from "@/components/International";

import International from "@/components/International";
import { getHotelRecommends } from "@/api/hotelRecommend/fetchHotelRecommend";

export default async function Home() {
  const hotelRecommends = await getHotelRecommends("新加坡");

  return (
    <div className="w-full h-full">
      <div className="w-full h-96">
        <International data={hotelRecommends} />
      </div>
    </div>
  );
}
