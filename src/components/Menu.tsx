'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FunctionComponent, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setIsopen } from '@/lib/store/menuStateSlice'
import { MenuFoldOutlined, MenuUnfoldOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import MenuItem from '@/ui/MenuItem';
import type { navmenu } from '../app/api/menus/navmenu'
import Link from 'next/link';

interface MyMenuProps {
  menus: navmenu[]
}

const MyMenu: FunctionComponent<MyMenuProps> = ({ menus }) => {
  const { isOpen } = useSelector((store: any) => store.menuState);
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(true);
  const [selectedKey, setSelectedKey] = useState('酒店');

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleSelectedKey = (menuItem: navmenu) => {
    setTimeout(() => {
      setSelectedKey(menuItem.title);
    }, 100)
  }

  return (
    isOpen ?
      <div className={cn("bg-white dark:bg-slate-900 dark:border-slate-900 overflow-y-auto z-10 flex flex-col w-full h-full fixed lg:w-36 lg:border", {
        'lg:w-16': !collapsed,
      })}>
        <div className={cn("bg-white dark:bg-slate-900 dark:border-slate-900 fixed top-0 w-full h-24 lg:h-14 flex pl-4 lg:w-36 lg:border", {
          'pl-2 lg:w-16': !collapsed,
        })}>
          <Button
            type="text"
            className={cn('block my-auto invisible lg:visible dark:bg-slate-700')}
            icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            onClick={toggleCollapsed}
            size={'large'}
          />

          {collapsed ?
            <Image
              className="pointer-events-none mt-5 ml-5 block h-10 lg:w-0 lg:invisible"
              src={"/logo.png"}
              width={160}
              height={25}
              alt={""}
            />
            : null}

          <Button
            type="text"
            className={cn('block my-auto absolute right-16 bottom-9 dark:bg-slate-700 lg:invisible')}
            icon={<CloseOutlined />}
            onClick={() => dispatch(setIsopen())}
            size={'large'}
          />
        </div>
        <div className={cn('flex flex-col z-20 h-4/5 overflow-scroll mt-24 lg:mt-14 lg:h-full')}>
          {menus.map((item: navmenu) => {
            return (
              <div key={item.title + item.id}>
                {item.title === '企业商旅' ? <hr className={cn('w-3/4 mx-auto my-2')} /> : null}

                <MenuItem
                  Icon={item.icon}
                  MenuItemInfo={item}
                  iScollapsed={collapsed}
                  isShow={selectedKey === item.title}
                  onClick={() => toggleSelectedKey(item)}
                >
                </MenuItem>
              </div>
            )
          })}
        </div>
      </div>
      : null
  );
}

export default MyMenu;