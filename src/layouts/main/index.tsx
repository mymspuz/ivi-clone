import React from 'react'
import { Outlet } from 'react-router-dom'

import { addClass } from '../../utils/bodyClass'
import { Header } from './components'

const MainLayout: React.FC = () => {

    addClass('body', 'basePage')

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout