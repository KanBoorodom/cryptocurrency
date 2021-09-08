import React from 'react'
import Illust from './Illust'
import data from './data'
import './illust.css'
const IllustContainer = () => {
    return (
        <section>
            <h2 className = "illust__head">What we provide</h2>
            {
                data.map((d,index)=><Illust 
                    head = {d.head} 
                    info = {d.info} 
                    src = {d.src}  
                    key = {index}
                    />)
            }
        </section>
    )
}

export default IllustContainer
