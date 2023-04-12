import * as React from 'react'
import Link from 'next/link'
import MyIcon from "@/ui/Icon";
import { Popover } from 'antd';
import { cn } from "@/lib/utils";
import type { navmenu } from '../../app/api/menus/navmenu'

interface MenuItemProps
	extends React.HtmlHTMLAttributes<HTMLDivElement> {
	Icon: any,
	MenuItemInfo: navmenu,
	iScollapsed: boolean,
	isShow?: boolean,
}

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
	({ className, children, Icon, MenuItemInfo, iScollapsed, isShow, ...props }, ref) => {
		const content = (
			<div>
				{MenuItemInfo.children?.map((subItem: navmenu) => {
					return (
						<Link
							key={subItem.title + subItem.id}
							href={subItem.path}
							className="block mb-1"
						>
							{subItem.title}
						</Link>
					)
				})}
			</div>
		)
		return (
			<div
				className={cn(className, 'bg-white dark:bg-slate-900 dark:border-slate-900 w-4/5 h-auto leading-9 mx-auto mt-1')}
				ref={ref}
				{...props}>
				{
					MenuItemInfo.children && !isShow ?
						<Popover overlayClassName={'invisible lg:visible'} trigger="hover" content={content} placement="rightTop">
							<div className={cn("flex flex-row rounded-3xl w-auto h-9 hover:bg-sky-50 dark:hover:bg-slate-700 hover:cursor-pointer", {
								'w-10': !iScollapsed,
								'bg-gradient-to-r from-sky-500 to-blue-500 text-slate-50 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-500': isShow
							})}>
								<MyIcon className={cn('my-auto ml-3 text-blue-700', { 'text-slate-50': isShow })} name={Icon} />
								{iScollapsed ? <Link href={MenuItemInfo.path} className={cn("w-auto text-left ml-2 dark:text-slate-50")}>{MenuItemInfo.title}</Link> : null}
							</div>
						</Popover>
						:
						<div className={cn("flex flex-row rounded-3xl w-auto h-9 hover:bg-sky-50 dark:hover:bg-slate-700 hover:cursor-pointer", {
							'w-10': !iScollapsed,
							'bg-gradient-to-r from-sky-500 to-blue-500 text-slate-50 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-500': isShow
						})}>
							<MyIcon className={cn('my-auto ml-3 text-blue-700', { 'text-slate-50': isShow })} name={Icon} />
							{iScollapsed ? <Link href={MenuItemInfo.path} className={cn("w-auto text-left ml-2 dark:text-slate-50")}>{MenuItemInfo.title}</Link> : null}
						</div>
				}

				{(isShow && iScollapsed && MenuItemInfo.children) ?
					<div className="flex flex-col dark:bg-slate-900 mt-1">
						{MenuItemInfo.children!.map(item => {
							return <Link href={item.path} className={cn('text-sm my-1 ml-8 w-32 dark:text-slate-50 hover:text-sky-600 lg:w-16 lg:text-xs lg:break-words lg:ml-9')} key={item.title + item.id}>{item.title}</Link>
						})}
					</div>
					: null}
				{children}
			</div>
		);
	})

MenuItem.displayName = 'MenuItem'

export default MenuItem;