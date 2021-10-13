import React from 'react'
import DaySelect from './DaySelect';
import LineGraph from '../LineGraph'

const BottomGraph = ({day,setDay,coinName,currencySelected,priceChange})=>{
    return   <div className = "coinInfo__bot__graphSide">
                <DaySelect day = {day} setDay = {setDay} />
                <LineGraph 
                    id = {coinName} searchAll = {''} day = {day} currencySelected = {currencySelected} 
                    priceChange = {priceChange}
                />
            </div>    
}
export default BottomGraph