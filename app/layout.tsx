import './globals.css'
import Header from './components/Header'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Insights blog',
  description: 'Insights is a personal soon to be world wide blogging app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {

  return (
    <html lang="en" data-theme={"night"}>
      <body className="bg-base-100">
        <Header/>
        {children}
      </body>
    </html>
  )
}
