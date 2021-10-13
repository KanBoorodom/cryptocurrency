import React from 'react'
import { useHistory } from 'react-router-dom'
import './lost.css'
const Lost = () => {
    const history = useHistory()
    const goBack = ()=>{history.goBack()}
    return (
        <div className = "lost">
            <h1 className = "lost__header">404</h1>
            <p className = "lost__p">Oooooppps look like we lost...</p>
            <img className = "lost__img" src="https://raw.githubusercontent.com/KanBoorodom/cryptocurrency/e28bc137f93d7862a88567c8d34c69442e1fc695/src/component/illust/lost.svg" alt="lost" />
            <div className = "lost__link" onClick = {goBack}>Go back</div>
        </div>
    )
}

export default Lost
