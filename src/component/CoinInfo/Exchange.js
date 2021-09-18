import React,{useState} from 'react'
import CurrencyDropdown from '../CurrencyDropdown'
import './coinInfo.css'
const Exchange = ({symbol,price,currencySelected}) => {
    const [exchangeValue,setExchangeValue] = useState(1)
    const changeHandle = (e)=>{
        let rgx = /^[0-9]*\.?[0-9]*$/
        /* Use regrex https://stackoverflow.com/questions/9799505/allow-only-numbers-and-dot-in-script/9799564 */
        if(e.target.value.match(rgx)){
            setExchangeValue(e.target.value)
        }    
    }
    return (
        <div className = 'exchange'>
            <h2>Exchange</h2>
            <form className = 'exchange__form' action="">
                <label htmlFor="">{symbol}</label>
                <input placeholder = 'Number only' type="text"  value = {exchangeValue} onChange = {changeHandle} maxLength = '12'/>
            </form>
            <div>
                <p>{currencySelected} {(exchangeValue * parseFloat(price)).toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':4})}</p>
            </div>
        </div>
    )
}

export default Exchange
