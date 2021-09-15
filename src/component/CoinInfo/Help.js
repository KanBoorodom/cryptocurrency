import React,{useState} from 'react'
import helpData from './helpData'
import './coinInfo.css'
const Help = () => {

    const [helpActive,setHelpActive] = useState(false)
    const clickHandle = ()=>{
        setHelpActive(!helpActive)
    }
    return (
        <div className = "coinInfo__help" onClick = {clickHandle}>
            <p style = {{cursor:'pointer'}}>Need help ?</p>
            <div className = {`coinInfo__help__container ${helpActive ? '--active' : ''}`}>
                {helpData.map((h,index) =>
                    {
                        return  <div key = {index}>
                                    <p className = "coinInfo__help__question">{h.head}</p>
                                    <p className = "coinInfo__help__equation">{h.cal}</p>
                                    <p className = "coinInfo__help__helpInfo">{h.info}</p>
                                </div>
                    }    
                )}
            </div>
        </div>
    )
}

export default Help
