import React from 'react'

import { CompilationHeader, CompilationCarousel } from '../../../../components'

type TProps = {
    title: string
}

const MainCompilation: React.FC<TProps> = ({ title }) => {
    return (
        <section className="pageSection home__pageSection" data-test="collectionsBlock">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="gallery home__gallery">
                        <CompilationHeader title={title} />
                        <CompilationCarousel />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainCompilation