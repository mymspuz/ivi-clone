import React, { useContext } from 'react'

import { PersonContext } from '../page'

const PersonBiography: React.FC = () => {

    const { creator } = useContext(PersonContext)

    return (
        <div id="biography" className="person__personBiography personBiography">
            <div className="personBiography__title">Биография</div>
            <div className="clause clause_is-native personBiography__clause">
                <div className="clause__text is-truncated">
                    <div className="clause__text-inner hidden-children">
                        {creator.biography}
                    </div>
                    <span className="clause__toggle">Читать дальше</span>
                </div>
            </div>
        </div>
    )
}

export default PersonBiography