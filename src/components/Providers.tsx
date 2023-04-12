'use client'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux';
import store from '@/lib/store';
import { FC, ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {

  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <Provider store={store}>
        <SessionProvider>{children}</SessionProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default Providers
