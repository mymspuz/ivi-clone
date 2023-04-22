import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { addClass } from '../../utils/bodyClass'
import {Header, HeaderSearchContext, HeaderSearchPopup} from './components/header'
import { Footer } from './components/footer'
import { TabBarPlate } from './components'

const MainLayout: React.FC = () => {

    addClass('body', 'basePage')

    const [ isMobile, setIsMobile ] = useState<boolean>(window.innerWidth <= 900)
    const [isSearch, setIsSearch] = useState<boolean>(false)
    const handleResize = () => setIsMobile(window.innerWidth <= 900)

    useEffect(() => {
        window.addEventListener('resize', () => handleResize)
        return () => window.removeEventListener('resize', () => handleResize)
    }, [])

    return (
        <>
            <HeaderSearchContext.Provider value={{ isSearch: isSearch, toggleSearch: () => setIsSearch(!isSearch) }}>
                <Header />
                {isSearch && <HeaderSearchPopup />}
            </HeaderSearchContext.Provider>
            <div className={'page-wrapper'}>
                <Outlet />
            </div>
            {isMobile && <TabBarPlate />}
            <Footer />
        </>
    )
}

export default MainLayout