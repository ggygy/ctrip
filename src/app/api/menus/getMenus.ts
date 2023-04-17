import { db } from '@/lib/db'
import type { navmenu } from './navmenu';

import 'server-only';

export async function getMenuIds() {
    const menuIds = db.navmenu.findMany({
        where: {status: 'enable'},
        orderBy: [
            {
               weigh: 'desc',
            }, {
               id: 'asc',
            }
         ],
    })
    return menuIds
}

/**
 * 通过传入一个父级菜单以及一个嵌套菜单项，将嵌套菜单项绑定到父级菜单的children属性中
 * @param {navmenu[]} menus
 * @param {Object} childrens
 * @returns {navmenu[]} menus
 */
export function getChildren(menus:navmenu[], childrens:any) {
     menus.forEach((menu) => {
        if (menu.id in childrens) {
            menu.children = getChildren(childrens[String(menu.id)], childrens)
        }
     })
     return menus
}

/**
 * 获取PID 0 下的所有子菜单栏
 * 通过先把数据转成Map去存储，之后遍历的同时借助对象的引用，直接从Map找对应的key做存储。
 * @returns {navmenu[]} 
 */
export async function getMenus() {
    let childrens = {} as any
    let menuIds = await getMenuIds()
    menuIds.forEach((menu) => {
        if (!(menu.pid in childrens)) {
            childrens[String(menu.pid)] = []
        } 
        childrens[String(menu.pid)] = [...childrens[String(menu.pid)], menu]
    })
    
    
    return getChildren(childrens['0'], childrens)
}