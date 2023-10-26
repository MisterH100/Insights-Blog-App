import './globals.css'
import Header from './components/Header'
import type { Metadata } from 'next'
import { GlobalContextProvider } from './utils/globalContext'
import { LoginModal } from './components/LoginModal'


export const metadata: Metadata = {
  title: 'Insights blog',
  description: 'Insights is a personal soon to be world wide blogging app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {

  return (
    <html lang="en" data-theme={"black"}>
      <body className="relative bg-base-100">
        <GlobalContextProvider>
          <Header/>
          <LoginModal/>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
