import React, { useContext } from 'react'

import { ButtonLink } from '../../../../components'
import ContentCardPlayer from "./ContentCardPlayer";
import ContentCardInfo from "./ContentCardInfo";
import ContentCardMedallions from "./ContentCardMedallions";
import ContentCardRating from "./ContentCardRating";
import ContentCardOptions from "./ContentCardOptions";
import ContentCardDesc from "./ContentCardDesc";

const MovieMainSection: React.FC = () => {


    return (
        <section className="pageSection pageSection_mGap contentCard__pageSection contentCard__pageSection_mGap">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="contentCard__mainContent">
                        <div className="contentCard__container">
                            <ContentCardPlayer />
                            <div className="contentCard__info">
                                <ContentCardInfo />
                                <ContentCardMedallions />
                                <div className="contentCard__freeCollectionsButton" style={{ textAlign: 'center' }}>
                                    <ButtonLink
                                        title={'Бесплатные сериалы'}
                                        icon={'nbl-icon_catalog_16'}
                                        addClass={'nbl-button_style_dafu userButtons__item_wide userButtons__item_freeCollection userButtons__item'}
                                    />
                                </div>
                                <ContentCardDesc />
                                <div className='contentCard__ratingAndOptions'>
                                    <ContentCardRating />
                                    <ContentCardOptions />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieMainSection