import React from 'react'

const ContentCardOptions = () => {
    return (
        <div className="watchOptions contentCard__watchOptions">
            <div className="watchOptions__container">
                <div className="watchOptions__options" data-test="languages_info_block">
                    <div className="watchOptions__title">Языки</div>
                    <div className="watchOptions__values">Русский, Французский</div>
                </div>
                <div className="watchOptions__options" data-test="subtitles_info_block">
                    <div className="watchOptions__title">Субтитры</div>
                    <div className="watchOptions__values">Русский</div>
                </div>
                <div className="watchOptions__options watchOptions__options_qualities"
                     data-test="quality_info_block">
                    <div
                        className="watchOptions__title watchOptions__title_narrow">Качество
                    </div>
                    <div
                        className="watchOptions__title watchOptions__title_wide">Изображение
                        и звук.<span> Фактическое качество зависит от устройства и ограничений правообладателя.</span>
                    </div>
                    <div className="watchOptions__iconsList">
                        <div
                            className="nbl-textBadge nbl-textBadge_size_nokro nbl-textBadge_style_rolin nbl-textBadge_isShadowEnabled_1 watchOptions__nbl-textBadge">
                            <div className="nbl-textBadge__text">FullHD</div>
                        </div>
                        <div
                            className="nbl-textBadge nbl-textBadge_size_nokro nbl-textBadge_style_rolin nbl-textBadge_isShadowEnabled_1 watchOptions__nbl-textBadge">
                            <div className="nbl-textBadge__text">HD</div>
                        </div>
                        <div
                            className="nbl-textBadge nbl-textBadge_size_nokro nbl-textBadge_style_rolin nbl-textBadge_isShadowEnabled_1 watchOptions__nbl-textBadge">
                            <div className="nbl-textBadge__text">1080</div>
                        </div>
                        <div
                            className="nbl-textBadge nbl-textBadge_size_nokro nbl-textBadge_style_rolin nbl-textBadge_isShadowEnabled_1 watchOptions__nbl-textBadge">
                            <div className="nbl-textBadge__text">720</div>
                        </div>
                        <div
                            className="nbl-textBadge nbl-textBadge_size_nokro nbl-textBadge_style_rolin nbl-textBadge_isShadowEnabled_1 watchOptions__nbl-textBadge">
                            <div className="nbl-textBadge__text">5.1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentCardOptions