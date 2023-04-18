import React from 'react'
import { Outlet } from 'react-router-dom'

import { addClass } from '../../utils/bodyClass'
import { Header } from './components/header'
import { Footer } from './components/footer'

const MainLayout: React.FC = () => {

    addClass('body', 'basePage')

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout