import Link from 'next/link'
import { FunctionComponent } from "react";
import { PhoneFilled, RightOutlined } from '@ant-design/icons';
import { Popover, PopoverProps } from "antd";

interface ServiceProps extends PopoverProps {

}

const Service: FunctionComponent<ServiceProps> = ({ className }) => {
  const content = (
    <div>
      <Link
        target='_blank'
        className='text-slate-900 text-xs font-bold my-2'
        href={'https://kefu.ctrip.com/index'}>
        访问客服中心
        <RightOutlined className='ml-1' />
      </Link>
      <hr className='w-full px-5 border mx-auto my-2' />
      <span className='block text-xs text-slate-700'>境内：95010或 400-830-6666</span>
      <span className='block text-xs text-slate-700'>中国香港：+852-3008-3295</span>
      <span className='block text-xs text-slate-700'>中国澳门：+86-21 3406-4888</span>
      <span className='block text-xs text-slate-700'>中国台湾：+86-21 3406-4888</span>
      <span className='block text-xs text-slate-700'>其他国家和地区：+86-21 3406-4888</span>
    </div>
  );

  return (
    <Popover className={className} content={content}>
      <PhoneFilled />
    </Popover>
  );
}

export default Service;