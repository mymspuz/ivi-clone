import React from 'react'

type TProps = {
    title?: string
    link?: string
    addClass?: string
    subTitle?: string
    icon?: string
    handlerClick?: () => void
    disabled?: boolean
}

const ButtonLink: React.FC<TProps> = ({ title, link, addClass,  subTitle, icon, handlerClick, disabled }) => {

    let resClass = 'nbl-button nbl-button_style_makoto nbl-button_hasBadge_0'
    if (!title || !icon) resClass += ' nbl-button_textAlign_center nbl-button_size_shinnok'
    if (!title && icon) resClass += ' nbl-button_iconMode_onlyIcon'
    if (title && icon) resClass += ' nbl-button_iconMode_withIcon nbl-button_size_brant'

    resClass += addClass ? ` ${addClass}` : ''

    const BtnIcon = ({ iconClass }: { iconClass: string }): JSX.Element => {
        return (
            icon?.includes('http')
                ?
                    <img
                        className="nbl-picture nbl-overturnButton__nbl-picture"
                        src={icon}
                        alt={title}
                    />
                :
                    <div className={`nbl-icon ${icon} nbl-${iconClass}__nbl-icon`}></div>
        )
    }

    const BtnContent = (): JSX.Element => {
        return (
            <div className="nbl-button__primaryText">
                {icon && <BtnIcon iconClass={'button'} />}
                {title}
            </div>
        )
    }

    return (
        subTitle
            ?
                <a
                    href={link}
                    className="nbl-overturnButton nbl-overturnButton_style_aumiro nbl-overturnButton_size_wiz"
                >
                    {icon && <BtnIcon iconClass={'overturnButton'} />}
                    <div className="nbl-overturnButton__textBlock">
                        <div className="nbl-overturnButton__preamble">{subTitle}</div>
                        <div className="nbl-overturnButton__caption">{title}</div>
                    </div>
                </a>
            :
                handlerClick
                    ?
                        <button
                            className={resClass}
                            onClick={handlerClick}
                            disabled={disabled}
                        >
                            <BtnContent />
                        </button>
                    :
                        <a
                            className={resClass}
                            href={link}
                            target="_blank"
                        >
                            <BtnContent />
                        </a>
    )
}

export default ButtonLink