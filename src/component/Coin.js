import React from 'react'
import './coin.css'
const Coin = ({name,image,symbol,price,volume,currncySelected,priceChange}) => {
    var d = new Date();
    return (
        <div className = 'coin'>
            <img className = "coin__img" src= {image}  alt="crypto" />
            <div className = "coin__data">
                <h1 className = "coin__name">{name} <br/>({symbol.toUpperCase()})</h1>
                {/* <p className="coin-symbol">{symbol}</p> */}
                <p className="coin__price">{currncySelected} {price.toLocaleString()}</p>
                <p className="coin__volume">Mkt Cap <br/>{currncySelected.toUpperCase()} {volume.toLocaleString()}</p>
                <p className = "coin__priceChange">24h change 
                    {priceChange > 0 ? <span className = "coin__priceChange--green"> +{priceChange.toFixed(2)}%</span>
                        :<span className = "coin__priceChange--red"> {priceChange.toFixed(2)}%</span>}
                </p>
            </div>
            <div className="coin__updatetime">
                <p>Last update {d.toLocaleTimeString('en-GB')}</p>
                <p>{d.toLocaleDateString()}</p>
            </div> 
        </div>
    )
}

export default Coin
