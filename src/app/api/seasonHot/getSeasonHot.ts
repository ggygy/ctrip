import { Random } from "mockjs";

import "server-only";
import { seasonHot } from "./seasonHot";

const href =
  "https://vacations.ctrip.com/travel/detail/p22686644/?city=13&ctm_ref=vactang_scene_40000019#ctm_ref=hp_group_pt_pro_01";
export async function getseasonHots(city: string, key: string) {
  console.log("city", city);
  const data: seasonHot[] = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      title: city + Random.ctitle(4, 5),
      alt: "",
      picPath: `/static/seasonHot/seasonHot1 (${Random.integer(1, 8)}).jpg`,
      rate: Random.float(4, 5, 0, 1),
      peopelSum: Random.integer(100, 5000),
      minPrice: Random.integer(100, 1000),
      cxChoice: key === "flight",
      datePlan: "04-22 去 04-25回",
      discount: Random.float(1, 7, 0, 1),
      href: href,
    });
  }
  return data;
}
