import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft,faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
const ReviewCard = ({src,name,review,index,size,current,setCurrent}) => {
    const rightArrow = ()=>{
        current === size-1 ? setCurrent(0) : setCurrent(prevCurrent => prevCurrent+1)
    }
    const leftArrow = ()=>{
        current === 0 ? setCurrent(size-1) : setCurrent(prevCurrent => prevCurrent-1)
    }
    return (
        <div className = {`reviewCard ${index === current ? "active" : "unactive"}`} >
            {index === current && 
                <>
                    <FontAwesomeIcon icon={faArrowCircleLeft} className = "reviewCard__arrowL" onClick = {leftArrow} />
                    <FontAwesomeIcon icon={faArrowCircleRight} className = "reviewCard__arrowR" onClick = {rightArrow} />
                    <img className="reviewCard__img" src={src} alt="user-review" />
                    <div className = "reviewCard__info">
                        <h2 className="reviewCard__info__name">{name}</h2>
                        <p className = "reviewCard__info__p">{review}</p>
                    </div>
                </>        
            }
        </div>
    )
}

export default ReviewCard
