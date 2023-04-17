import React from 'react'

import { addClass } from '../../utils/bodyClass'

const MainPage: React.FC = () => {

    addClass('body', 'home')
    addClass('root', 'basePage__inner')

    return (
        <div>
            <h1>MainPage</h1>
        </div>
    )
}

export default MainPage