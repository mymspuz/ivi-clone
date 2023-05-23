import React, { useState } from 'react'

type TProps = {
    handlerAdd: (comment: string) => void
}

const CommentAddForm: React.FC<TProps> = ({ handlerAdd }) => {

    const [ comment, setComment ] = useState<string>('')

    const handlerSubmit = () => {
        handlerAdd(comment)
        setComment('')
    }

    return (
        <form className="movie-extras__form">
            <div className="nbl-avatar nbl-avatar_size_lugano nbl-avatar_isFullyRounded_0 nbl-avatar_available movie-extras__nbl-avatar">
                <div className="nbl-avatar__body">
                    <div className="nbl-icon nbl-icon_avatar_16 nbl-avatar__nbl-icon"></div>
                </div>
            </div>
            <div className="movie-extras__nbl-input nbl-input nbl-input_style_xenon nbl-input_type_pascal nbl-input_iconType_none">
                <div className="nbl-input__body">
                    <input
                        autoComplete="off"
                        className="nbl-input__editbox"
                        style={{ paddingTop: 0 }}
                        data-test="comments_input_comment"
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
            </div>
            <div className="movie-extras__form-footer">
                <button
                    className="nbl-button nbl-button_style_kioshi nbl-button_size_shinnok nbl-button_hasBadge_0 movie-extras__nbl-button"
                    disabled={comment.length < 10}
                >
                    <div
                        className="nbl-button__primaryText"
                        onClick={handlerSubmit}
                    >
                        Отправить
                    </div>
                </button>
            </div>
        </form>
    )
}

export default CommentAddForm