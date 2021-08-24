import React from 'react'
import { v4 as uuid_v4 } from "uuid" 
import './currencydropdown.css'
const CurrencyDropdown = ({currncySelected,setCurrncySelected,currency}) => {
    const handleChange = (e)=>{
        setCurrncySelected(e.target.value)
    }
    return (
        <select className = 'currencyDropdown__select' value = {currncySelected} onChange = {handleChange}>
            <option value="thb">--- Choose Currency ---</option>
            {currency.map(c => 
                <option 
                    key = {uuid_v4()}
                    value = {c}
                >
                    {c}
                </option>)
            }
        </select>
    )
}

export default CurrencyDropdown
