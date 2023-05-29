'use client'

import '../assets/css/main.css'
import '../assets/css/fonts.css'
import '../assets/css/nebula-gambit.css'
import '../assets/css/gallery.css'
import '../assets/css/ivi-carousel.css'
import '../assets/css/defer_ds.css'
import '../assets/css/response.css'

import { Inter } from 'next/font/google'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Provider } from 'react-redux'

import { HeaderSearchContext, HeaderSearchPopup } from './components/header'
import { TabBarPlate, MobileNavigation, Footer, Header } from './components'
import { store } from '@/store'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type TProps = {
  children: any
}

const RootLayout: React.FC<PropsWithChildren<TProps>> = ({ children }) => {
    const [ isMobile, setIsMobile ] = useState<boolean>((typeof window !== "undefined") ? window.innerWidth <= 900 : false)
    const [ isSearch, setIsSearch ] = useState<boolean>(false)
    const [ isOpenMobile, setIsOpenMobile ] = useState<boolean>(false)
    const handleResize = () => setIsMobile((typeof window !== "undefined") ? window.innerWidth <= 900 : false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener('resize', () => handleResize)
            return () => window.removeEventListener('resize', () => handleResize)
        }
    }, [])

  return (
      <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta
            name="description"
            content="Web site created using create-react-app"
        />
        {/*<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"/>*/}
        {/*<link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>*/}
        <title>IVI-clone</title>
      </head>
      <body className={'basePage'}>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root" className={'basePage__inner'}>
            <Provider store={ store }>
                <HeaderSearchContext.Provider value={{ toggleSearch: () => setIsSearch(!isSearch) }}>
                    <Header />
                    {isSearch && <HeaderSearchPopup />}
                </HeaderSearchContext.Provider>
                <div className={'page-wrapper'}>
                    {children}
                </div>
                {isOpenMobile && <MobileNavigation />}
                {isMobile && <TabBarPlate toggleSearch={() => setIsSearch(!isSearch)} toggleMobileNav={() => setIsOpenMobile(!isOpenMobile)} />}
                <Footer />
            </Provider>
        </div>
      </body>
      </html>
  )
}

export default RootLayout