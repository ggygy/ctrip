import Header from '@/components/Header'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import { cn } from '@/lib/utils'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Aside from '@/components/MyInfoAside'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  
  return (
    <html
      lang='en'
      className={cn('bg-white text-slate-900 antialiased', inter.className)}>
      <body className='min-h-screen bg-white dark:bg-slate-900 antialiased flex flex-row'>
        <Providers>
          <div className="w-screen h-full justify-center">
            <div className="mx-auto max-w-6xl space-y-4 px-2 pt-5 lg:pt-3 lg:py-5 lg:px-8">
              <Header className='justify-center' session={session}/>

              <div className='flex flex-col lg:ml-32 lg:flex-row'>
                <Aside className='w-full h-60 lg:w-32'/>
                <main className='w-11/12 h-screen mx-auto lg:w-4/5 lg:mx-0'>{children}</main>
              </div>
              

              {/* Allow more height for mobile menu on mobile */}
              <div className='h-5 md:hidden' />
            </div>
          </div>
        </Providers>

      </body>
    </html>
  )
}
