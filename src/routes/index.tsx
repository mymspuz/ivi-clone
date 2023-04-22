import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'

import { AdminLayout, MainLayout } from '../layouts'
import { AdminPage, ErrorPage, MainPage, MoviePage, MoviesPage, PersonPage } from '../pages'

const MainRouter: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path='movie' element={<MoviePage />} />
                    <Route path='movies' element={<MoviesPage />} />
                    <Route path='person' element={<PersonPage />} />
                </Route>
                <Route element={<AdminLayout />}>
                    <Route path='admin' element={<AdminPage />} />
                </Route>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </HashRouter>
    )
}

export default MainRouter