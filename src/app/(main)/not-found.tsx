import Link from 'next/link'
import { FC } from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '仿携程PC大首页',
  description: '携程旅行官网：酒店预订、机票预订查询、旅行度假',
}

const PageNotFound: FC = () => {
  return (
    <section className='container pt-32 max-w-7xl mx-auto text-center flex flex-col gap-6 items-center'>

      {/* <Link
        className={buttonVariants({
          variant: 'ghost',
          className: 'w-fit',
        })}
        href='/'>
        <Icons.ChevronLeft className='mr-2 h-4 w-4' />
        Back to home
      </Link> */}
    </section>
  )
}

export default PageNotFound
