import { FunctionComponent } from "react";
import { Dropdown, MenuProps } from 'antd';
import MyIcon from "@/ui/Icon";
import {
  UserOutlined,
  CaretDownFilled
} from "@ant-design/icons";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";


interface OrderItemProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  iconName: any,
  info: string
}

const signUserOut = async () => {
  try {
    await signOut()
  } catch (error) {
  }
}

const OrederItem: FunctionComponent<OrderItemProps> = ({ iconName, info }) => {
  return (
    <div className="flex flex-row my-auto text-xs rounded-2xl  hover:text-sky-500">
      <div className="my-auto px-1 text-sm"><MyIcon className={''} name={iconName} /></div>
      <span className="px-1 mr-1 py-1">{info}</span>
    </div>
  )
}

const items: MenuProps['items'] = [
  {
    label: (
      <div className="flex flex-row">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex flex-col ml-2">
          <span className="text-gray-900 text-sm font-semibold">尊敬的会员 &gt;</span>
          <span className="text-gray-700 text-xs font-normal w-14 text-center rounded-md bg-blue-200">普通会员</span>
        </div>
      </div>
    ),
    key: '1',
  },
  {
    label: (
      <OrederItem iconName={'GoldFilled'} info="我的积分" />
    ),
    key: '2',
  },
  {
    label: (
      <OrederItem iconName={'ShoppingFilled'} info="我的钱包" />
    ),
    key: '3',
  },
  {
    label: (
      <OrederItem iconName={'HeartFilled'} info="我的收藏" />
    ),
    key: '4',
  },
  {
    label: (
      <OrederItem iconName={'CreditCardFilled'} info="常用信息" />
    ),
    key: '5',
  },
  {
    label: (
      <OrederItem iconName={'ShopFilled'} info="会员商城" />
    ),
    key: '6',
  },
  {
    label: (
      <hr />
    ),
    key: '7',
  },
  {
    label: (
      <OrederItem 
        iconName={'LogoutOutlined'} 
        info="退出登录" />
    ),
    key: '8',
  },
];

interface MyInfoDropdownProps
  extends React.HtmlHTMLAttributes<HTMLAnchorElement> {

}

const MyInfoDropdown: FunctionComponent<MyInfoDropdownProps> = ({ className }) => {
  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === '8') {
      signUserOut()
    }
  };

  return (
    <Dropdown
      className={cn("", className)}
      placement="bottom"
      arrow={{ pointAtCenter: true }}
      menu={{ items, onClick }}>
      <a onClick={(e) => e.preventDefault()}>
        <UserOutlined />
        <span className="text-sm ml-1">尊敬的会员</span>
        <CaretDownFilled className="text-xs" />
      </a>
    </Dropdown>
  );
}

export default MyInfoDropdown;