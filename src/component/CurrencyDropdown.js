import React from 'react'
import useFetch from './useFetch'
import { v4 as uuid_v4 } from "uuid" 
import './currencydropdown.css'
const CurrencyDropdown = ({currencySelected,setCurrencySelected}) => {
    const handleChange = (e)=>{
        setCurrencySelected(e.target.value)
    }
    let {data} = useFetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
        return (
            <select className = 'currencyDropdown__select' value = {currencySelected} onChange = {handleChange}>
                <option value="thb">--- Choose Currency ---</option>
                {data.sort().map(c => 
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
