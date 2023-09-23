"use client";
import DropDown from './components/Dropdown';
import Header from './components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { useState} from 'react'

export const metadata: Metadata = {
  title: 'Insights blog',
  description: 'Insights is a personal soon to be world wide blogging app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  const [theme, setTheme] = useState(false);

  return (
    <html lang="en" data-theme={theme? "winter": "night"}>
      <body className="bg-base-100">
        <Header
          children={<DropDown PageTheme={setTheme} theme={theme}/>}/>
        {children}
      </body>
    </html>
  )
}
