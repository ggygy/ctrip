import { getBaseUrl } from "@/lib/getBaseUrl";
import { notFound } from "next/navigation";
import type { hotelRecommend } from "./hotelRecommend";

import "server-only";

export async function getHotelRecommends(city: string) {
  const res = await fetch(`${getBaseUrl()}/api/hotelRecommend?city=${city}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error("Something went wrong!");
  }

  const hotelRecommends = (await res.json()) as hotelRecommend[];

  if (hotelRecommends.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return hotelRecommends;
}
