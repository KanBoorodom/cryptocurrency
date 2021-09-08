import React from 'react'
import './illust.css'
const Illust = ({src,head,info}) => {
    return (
        <div className = 'illust'>
            <div>
                <h2 className = 'illust__header'>{head}</h2>
                <p className = 'illust__p'>{info}</p>
            </div>
            <img 
                className = 'illust__img' 
                src={src} 
                alt={head} 
            />
        </div>
    )
}

export default Illust
