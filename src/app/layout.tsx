import Menu from '@/components/Menu'
import Header from '@/components/Header'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import { getMenus } from './api/menus/fetchMenus'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })
// {/* @ts-expect-error Server Component */}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const menus = await getMenus();

  return (
    <html
      lang='en'
      className={cn('bg-white text-slate-900 antialiased', inter.className)}>
      <body className='min-h-screen bg-white dark:bg-slate-900 antialiased flex flex-row'>
        <Providers>

          <Menu menus={menus} />

          <div className="w-screen h-screen lg:pl-40">
            <div className="mx-auto max-w-6xl space-y-4 px-2 pt-5 lg:pt-3 lg:py-5 lg:px-8">
              <Header />

              <main>{children}</main>
            </div>
          </div>
        </Providers>

        {/* Allow more height for mobile menu on mobile */}
        {/* <div className='h-5 md:hidden' /> */}
      </body>
    </html>
  )
}
