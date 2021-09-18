import React from 'react'
import { Link } from 'react-router-dom'
import './lost.css'
const Lost = () => {
    return (
        <div className = "lost">
            <h1 className = "lost__header">404</h1>
            <p className = "lost__p">Oooooppps look like we lost...</p>
            <img className = "lost__img" src="https://raw.githubusercontent.com/KanBoorodom/cryptocurrency/e28bc137f93d7862a88567c8d34c69442e1fc695/src/component/illust/lost.svg" alt="lost" />
            <Link to = '/coins'>
                <div className = "lost__link">Go back</div>
            </Link>
        </div>
    )
}

export default Lost
