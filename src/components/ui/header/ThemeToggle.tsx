'use client'

import { useTheme } from 'next-themes'
import type { MenuProps } from 'antd';
import { Dropdown, Button } from 'antd';
import { FunctionComponent, useState } from 'react';

const items: MenuProps['items'] = [
  {
    label: (
      <div className='flex flex-row w-20 px-1 dark:bg-slate-100'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
        <span className='px-2 my-auto text-sm'>Light</span>
      </div>
    ),
    key: 'light',
  },
  {
    label: (
      <div className='flex flex-row w-20 px-1 dark:bg-slate-100'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
        <span className='px-2 my-auto text-sm'>Dark</span>
      </div>
    ),
    key: 'dark',
  },
];

interface ThemeToggleProps
  extends React.HtmlHTMLAttributes<HTMLAnchorElement> {

}

const ThemeToggle: FunctionComponent<ThemeToggleProps> = ({ className }) => {
  const [isDark, setIsDark] = useState(false)
  const { setTheme } = useTheme()

  const onClick: MenuProps['onClick'] = ({ key }) => {
    key === 'light' ? setIsDark(false) : setIsDark(true)
    setTheme(key)
  };

  return (
    <Dropdown menu={{ items, onClick }}>
      <Button
        className={className}
        onClick={(e) => e.preventDefault()}
        size='large'
        icon={isDark ?
          <div className='ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </div>
          : <div className='ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </div>
        }>
      </Button >
    </Dropdown >
  );
}

export default ThemeToggle;