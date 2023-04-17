import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AdminLayout, MainLayout } from '../layouts'
import { AdminPage, ErrorPage, MainPage } from '../pages'

const MainRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                </Route>
                <Route element={<AdminLayout />}>
                    <Route path='admin' element={<AdminPage />} />
                </Route>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter