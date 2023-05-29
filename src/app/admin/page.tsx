'use client'

import React from 'react'

import '../../assets/css/page-person.css'
import { GenresSection, MoviesSection } from '@/app/admin/components'
import { addClass } from '@/utils/bodyClass'

const AdminPage = () => {

    addClass('body', 'person')
    addClass('root', 'basePage__inner')

    return (
        <>
            <GenresSection />
            <MoviesSection />
        </>
    )
}

export default AdminPage