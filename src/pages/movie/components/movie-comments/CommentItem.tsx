import React from 'react'

type TProps = {
    data: {
        author: string
        date: string
        text: string
    }
}

const CommentItem: React.FC<TProps> = ({ data }) => {

    const viewDate = data.date

    return (
        <li className="movie-extras__item">
            <header className="movie-extras__item-header">
                <div className="nbl-avatar nbl-avatar_size_lugano nbl-avatar_isFullyRounded_0 nbl-avatar_available movie-extras__nbl-avatar">
                    <div className="nbl-avatar__body">
                        <div
                            className="nbl-avatar__bgPicture"
                            style={{backgroundImage: 'url(&quot;https://gambit-parent.dfs.ivi.ru/static/23.05.01/images/avatarBg/beirut.jpg&quot;)'}}
                        ></div>
                        <div className="nbl-avatar__text">m</div>
                    </div>
                </div>
                <cite className="movie-extras__item-cite">{data.author}</cite>
                <time className="movie-extras__item-date" dateTime={data.date}>{viewDate}</time>
                <div className="vote vote_status_positive movie-extras__vote">
                    <button className="vote__buttonUp" data-test="comments_like" type="button">
                        <div className="nbl-icon nbl-icon_thumbUp_16 vote__nbl-icon"></div>
                    </button>
                    <div className="vote__value" data-test="comments_rating">36</div>
                    <button className="vote__buttonDown" data-test="comments_dislike" type="button">
                        <div className="nbl-icon nbl-icon_thumbDown_16 vote__nbl-icon"></div>
                    </button>
                </div>
            </header>
            <div className="clause">
                <div className="clause__text is-truncated">
                    <p>{data.text}</p>
                    <span className="clause__toggle">Развернуть</span>
                </div>
            </div>
        </li>
    )
}

export default CommentItem