import { Random } from "mockjs";
// import { db } from "@/lib/db";
import type { hotelRecommend } from "./hotelRecommend";
// const Mock = require("mockjs");
import "server-only";

const picPath = [
  "/static/hotel_pic/hotel_1.jpg",
  "/static/hotel_pic/hotel_2.jpg",
  "/static/hotel_pic/hotel_3.jpg",
  "/static/hotel_pic/hotel_4.jpg",
];
export async function getHotelRecommends(city: string) {
  const data: hotelRecommend[] = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      picPath: picPath[Random.integer(0, 3)],
      hotelName: city + Random.ctitle(2, 5) + "酒店",
      star: 4,
      grade: Random.float(4, 5, 0, 1),
      rate: "超棒",
      commentsNum: Random.integer(100, 5000),
      price: Random.integer(100, 5000),
      url: "https://hotels.ctrip.com/hotels/77694994.html#ctm_ref=hp_htl_pt_pro_01",
    });
  }
  return data;
}
