import React, {useState} from 'react'
import ReviewCard from './ReviewCard'
import reviewData from './reviewData'
import './review.css'

const Review = () => {
    const [current,setCurrent] = useState(0)
    return (
        <div className = "review">
            <h2 className = "review__head">User Testimonials</h2>
            {reviewData.map((review,index) => <ReviewCard 
                    src = {review.src}
                    name = {review.name}
                    review = {review.review}
                    index = {index}
                    size = {reviewData.length}
                    current = {current}
                    setCurrent = {setCurrent}
                    key = {index}
                />
            )}
        </div>
    )
}

export default Review
