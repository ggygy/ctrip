import { getBaseUrl } from "@/lib/getBaseUrl";
import { notFound } from "next/navigation";

import { seasonHot } from "./seasonHot";

export async function getSeasonHot(city: string, key: string) {
  // console.log("city", city);s
  const res = await fetch(
    `${getBaseUrl()}/api/seasonHot?city=${city}&key=${key}/`,
    { next: { revalidate: 60 } }
  );
  // console.log("res", res);
  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error("Something went wrong!");
  }

  const menus = (await res.json()) as seasonHot[];

  if (menus.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return menus;
}
