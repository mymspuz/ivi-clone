import React from 'react'

const MobileRatings: React.FC = () => {

    const data: { link: string, title: string }[] = [
        { link: 'https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&amp;sort=ivi&amp;rating_part=main&amp;rating_model=ready', title: 'Иви.Рейтинг фильмы' },
        { link: 'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&amp;sort=ivi&amp;rating_part=main&amp;rating_model=ready', title: 'Иви.Рейтинг сериалы' },
    ]

    return (
        <div className="mobileNavigation-group">
            <div className="mobileNavigation__item">
                <ul className="mobileNavigation__linkSection">
                    {data.map(item => (
                        <li key={item.title} className="mobileNavigation__linkSectionItem">
                            <a
                                className="nbl-link nbl-link_style_baf"
                                href={item.link}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MobileRatings