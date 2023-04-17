import React from 'react'

import {
    moviesMenuItemsDoubleColumn,
    moviesMenuItemsSideContent,
    moviesMenuItemsSingleColumn
} from '../../../../data/dataMenus'
import DoubleColumn from './DoubleColumn'
import SingleColumn from './SingleColumn'
import SideContent from './SideContent'

type TProps = {
    id: string
}

const HeaderDropDownMenu: React.FC<TProps> = ({ id }) => {
    return (
        <div className={`headerDropdown ${id}`}>
            <div className="headerDropdown__body">
                <div className="headerDropdown__grid">
                    <div className="dropdownContent">
                        <DoubleColumn data={moviesMenuItemsDoubleColumn} />
                        <SingleColumn data={moviesMenuItemsSingleColumn} />
                        <SideContent items={moviesMenuItemsSideContent} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderDropDownMenu