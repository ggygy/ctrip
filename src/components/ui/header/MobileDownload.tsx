import Image from 'next/image'
import Link from 'next/link'
import { Popover, PopoverProps } from "antd";
import { MobileOutlined, RightOutlined } from '@ant-design/icons';
import { FunctionComponent } from "react";

interface MobileDownloadProps extends PopoverProps {

}

const MobileDownload: FunctionComponent<MobileDownloadProps> = ({ className }) => {
  const content = (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col mx-1">
          <Image
            src={'/mobileCtrip.jpg'}
            alt={'扫码下载携程App或关注微信公众号'}
            width={120}
            height={120}
          />
          <span className='mt-1 text-xs'>扫码下载携程手机App</span>
        </div>
        <div className="flex flex-col  mx-1">
          <Image
            src={'/welfare.png'}
            alt={'扫码下载携程App或关注微信公众号'}
            width={120}
            height={120}
          />
          <span className='mt-1 text-xs'>添加携程福利官领优惠</span>
        </div>
      </div>
      <div>
        <Link
          target='_blank'
          className='text-slate-900 text-xs font-bold my-3 ml-4'
          href={'https://app.ctrip.com/app/'}>
          携程旅行手机版
          <RightOutlined className='ml-1' />
        </Link>
      </div>
    </>
  );

  return (
    <Popover className={className} content={content}>
      <MobileOutlined />
    </Popover>
  );
}

export default MobileDownload;