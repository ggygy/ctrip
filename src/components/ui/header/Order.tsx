import MyIcon from "@/ui/Icon";
import { FunctionComponent } from "react";
import { DatabaseFilled, CaretDownFilled } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Dropdown, message } from 'antd';
import { useRouter } from "next/navigation";

interface OrderItemProps {
  iconName: any,
  info: string
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
      <OrederItem iconName={'RocketOutlined'} info="机票+相关订单" />
    ),
    key: '/myInfo/order/flight',
  },
  {
    label: (
      <OrederItem iconName={'BankOutlined'} info="酒店订单" />
    ),
    key: '/myInfo/order/hotel',
  },
  {
    label: (
      <OrederItem iconName={'FlagOutlined'} info="旅游订单" />
    ),
    key: '/myInfo/order/trip',
  },
  {
    label: (
      <OrederItem iconName={'CarOutlined'} info="火车票订单" />
    ),
    key: '/myInfo/order/train',
  },
  {
    label: (
      <OrederItem iconName={'UnorderedListOutlined'} info="全部订单" />
    ),
    key: '/myInfo/order/all',
  },
  {
    label: (
      <hr />
    ),
    key: '6',
  },
  {
    label: (
      <OrederItem iconName={'MobileOutlined'} info="手机号查询订单" />
    ),
    key: '7',
  },
];

interface OrderProps {

}

const Order: FunctionComponent<OrderProps> = () => {
  const router = useRouter();

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key.length > 3) {
      router.push(key)
    }
  };

  return (
    <Dropdown
      className="my-auto ml-5 h-5 text-sm truncate dark:text-slate-50 hover:text-sky-500"
      placement="bottom"
      arrow={{ pointAtCenter: true }}
      menu={{ items, onClick }}>
      <a onClick={(e) => e.preventDefault()}>
        <DatabaseFilled className="" />
        <span className="mx-2">我的订单</span>
        <CaretDownFilled className=" text-xs" />
      </a>
    </Dropdown>
  );
}

export default Order;