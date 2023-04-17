import { db } from "@/lib/db";
import type { navmenu } from "./navmenu";

import "server-only";

export async function getMenuIds() {
  const menuIds = db.navmenu.findMany({
    where: { status: "enable" },
    orderBy: [
      {
        weigh: "desc",
      },
      {
        id: "asc",
      },
    ],
  });
  return menuIds;
}

export function getChildren(menus: navmenu[], childrens: any) {
  menus.forEach((menu) => {
    if (menu.id in childrens) {
      menu.children = getChildren(childrens[String(menu.id)], childrens);
    }
  });
  return menus;
}

export async function getMenus() {
  let childrens = {} as any;
  let menuIds = await getMenuIds();
  menuIds.forEach((menu) => {
    if (!(menu.pid in childrens)) {
      childrens[String(menu.pid)] = [];
    }
    childrens[String(menu.pid)] = [...childrens[String(menu.pid)], menu];
  });

  return getChildren(childrens["0"], childrens);
}
