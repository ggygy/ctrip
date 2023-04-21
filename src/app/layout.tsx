/*
 * @Version: 1.0
 * @Autor: zwj
 * @Date: 2023-04-12 21:21:33
 * @LastEditors: zwj
 * @LastEditTime: 2023-04-15 22:55:09
 * @Description: 
 */
import Menu from '@/components/Menu'
import Header from '@/components/Header'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import { getMenus } from './api/menus/fetchMenus'
import { cn } from '@/lib/utils'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const inter = Inter({ subsets: ['latin'] })
// {/* @ts-expect-error Server Component */}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const menus = await getMenus();
  // 获取会话信息，判断用户是否登录
  const session = await getServerSession(authOptions)

  return (
    <html
      lang='en'
      className={cn('bg-white text-slate-900 antialiased', inter.className)}>
      <body className='min-h-screen bg-white dark:bg-slate-900 antialiased flex flex-row'>
        <Providers>

          <Menu menus={menus} />

          <div className="w-screen h-full lg:pl-40">
            <div className="mx-auto max-w-6xl space-y-4 px-2 pt-5 lg:pt-3 lg:py-5 lg:px-8">
              <Header session={session}/>

              <main>{children}</main>

              {/* Allow more height for mobile menu on mobile */}
              <div className='h-5 md:hidden' />
            </div>
          </div>
        </Providers>

      </body>
    </html>
  )
}
