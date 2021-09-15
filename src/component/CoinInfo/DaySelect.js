import React from 'react'
import './coinInfo.css'
const DaySelect = ({day,setDay}) => {
    const clickHandle = (e)=>{
        const d = e.target.innerHTML.replace(/\D/g,'')
        if(d !== '24'){
            setDay(d)
        }
        else{
            setDay('1')
        }
    }
    const dayData = [{'id':'1','value':'24h'},{'id':'7','value':'7d'},{'id':'14','value':'14d'},{'id':'30','value':'30d'}]
    return (
    <div className="daySelect">
        {dayData.map(d =>   <div 
                                key = {d.id} 
                                onClick = {clickHandle}
                                style = {{backgroundColor:`${day === d.id ? '#1d6085':''}`}}
                            >   
                                {d.value}
                            </div>)
        }
    </div>
    )
}

export default DaySelect
