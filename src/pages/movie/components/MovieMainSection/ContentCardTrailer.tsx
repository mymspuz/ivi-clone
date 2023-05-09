import React, { useContext } from 'react'

import { MovieContext } from '../../index'

const ContentCardTrailer = () => {

    const data = useContext(MovieContext)

    return (
        <div className="playerBlock contentCard__playerBlock">
            <div className="playerBlock__areaWrapper">
                <div className="playerBlock__area">
                    <div className="playerBlock__wrapper">
                        <div className="playerBlock__inner">
                            <div className="playerBlock__video">
                                <div className="stub playerBlock__stub"></div>
                                <video
                                    className="playerBlock__trailer"
                                    playsInline={false}
                                    src={data.trailer}
                                    style={{ display: 'block' }}
                                ></video>
                                <div
                                    className="playerBlock__videoIframeWrapper js-player-wrapper"
                                    style={{ display: 'none' }}
                                >
                                    <div className="playerBlock__videoIframeWrapper" id="js-content-player-439608"></div>
                                </div>
                                <img
                                    className="playerBlock__previewImg"
                                    src="https://thumbs.dfs.ivi.ru/storage9/contents/8/f/5e5174201660cd6b405d2af22980e7.jpg/858x483/?q=85"
                                    style={{ display: 'none' }}
                                />
                            </div>
                            <div className="playerBlock__overlay">
                                <div className="playerBlock__actionWrapper">
                                    <div className="details__actionsInner" data-nosnippet="true">
                                        <div
                                            className="nbl-button nbl-button_textAlign_center nbl-button_style_kioshi nbl-button_size_motaro nbl-button_hasBadge_0 playerBlock__nbl-button playerBlock__nbl-button_playerMainAction"
                                            data-test="buy_subscription"
                                        >
                                            <div className="nbl-button__primaryText">Смотреть</div>
                                            <span className="nbl-button__secondaryText">по подписке Иви</span>
                                        </div>
                                        <div
                                            className="playerBlock__note"
                                            data-test="player_note"
                                            style={{ color: 'rgb(255, 255, 255)' }}
                                        >
                                            Первые 30 дней подписки за 1 ₽
                                        </div>
                                    </div>
                                </div>
                                <span className="playerBlock__trailerLink" data-nosnippet="true">
                                    Развернуть трейлер
                                </span>
                                <div className="nbl-ageBadge nbl-ageBadge nbl-ageBadge_value_18 playerBlock__nbl-ageBadge"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentCardTrailer