import React,{useEffect} from 'react'
import data from './data'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './illust.css'
const IllustContainer = () => {
    useEffect(()=>{
        Aos.init({duration:1000,once:true})
      },[])

    return (
        <section>
            <h2 className = "illust__head">What we provide</h2>
            {
                data.map((d,index)=>
                    <div className = 'illust' key = {index}>
                        <div>
                            <h2 data-aos = 'fade-up' className = 'illust__header'>{d.head}</h2>
                            <p data-aos = 'fade-up' className = 'illust__p'>{d.info}</p>
                        </div>
                        <img 
                            className = 'illust__img' 
                            src={d.src} 
                            alt={d.head} 
                        />
                    </div>
                )
            }
        </section>
    )
}

export default IllustContainer
