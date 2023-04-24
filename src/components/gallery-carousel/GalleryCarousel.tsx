import React, { PropsWithChildren, useState } from 'react'

import BtnBigLeft from './BtnBigLeft'
import BtnBigRight from './BtnBigRight'
import BtnSmallRight from './BtnSmallRight'
import BtnSmallLeft from './BtnSmallLeft'

type TProps = {
    children: any
    size: {
        width: number
        padding: number
    }
    type: 'small' | 'big'
}

const GalleryCarousel: React.FC<PropsWithChildren<TProps>> = ({ children, size, type }) => {

    const sizeItem = size.width + size.padding
    const countItem = Math.floor(window.innerWidth / sizeItem)
    const [activeIndex, setActiveIndex] = useState<number>(0)

    const changeIndex = (value: number): void => {
        const newIndex = activeIndex + value * (countItem - 1)
        if (newIndex < 0) {
            setActiveIndex(0)
        } else if (newIndex + countItem > React.Children.count(children)) {
            setActiveIndex(React.Children.count(children) - countItem)
        } else {
            setActiveIndex(newIndex)
        }
    }

    return (
        <div className="gallery__carousel">
            <div className="gallery__viewport">
                <div className="gallery__viewport-inner">
                    <div className="ivi-carousel">
                        {activeIndex
                            ?
                                type === 'big' ? <BtnBigLeft action={changeIndex} /> : <BtnSmallLeft action={changeIndex} />
                            :
                                null
                        }
                        <div className="ivi-carousel-viewport">
                            <div
                                className="ivi-carousel-container"
                                style={{
                                    transform: `translate3d(${0 - sizeItem * activeIndex}px, 0px, 0px)`,
                                    width: `${React.Children.count(children) * sizeItem + 1000}px`,
                                    transition: 'transform 0.5s'
                                }}
                            >
                                {React.Children.map(children, (child, index) => {
                                    return React.cloneElement(child, {size: size})
                                })}
                            </div>
                        </div>
                        {(activeIndex + countItem < React.Children.count(children))
                            ?
                                type === 'big' ? <BtnBigRight action={changeIndex} /> : <BtnSmallRight action={changeIndex} />
                            :
                                null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryCarousel