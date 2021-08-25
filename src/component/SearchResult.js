import React from 'react'
import './coin.css'
const SearchResult = ({name,image,symbol,price,volume,currncySelected,priceChange}) => {
    var d = new Date();
    return (
        <div className = 'coin searchResult'>
            <h1 className = "coin__name" style = {{textAlign:'center'}}>{name} ({symbol.toUpperCase()})</h1>
            <div className = "coin__data searchResult__dataContainer">
                <img className = "coin__img" src= {image}  alt="crypto" />
                <div className="searchResult__data">
                    <p className="coin__price">{currncySelected} {price.toLocaleString()}</p>
                    <p className="coin__volume">Mkt Cap <br/>{currncySelected.toUpperCase()} {volume.toLocaleString()}</p>
                    <p className = "coin__priceChange">24h change 
                        {priceChange > 0 ? <span className = "coin__priceChange--green"> +{priceChange.toFixed(2)}%</span>
                            :<span className = "coin__priceChange--red"> {priceChange.toFixed(2)}%</span>}
                    </p>
                </div>
            </div>
            <div className="coin__updatetime">
                <p>Last update {d.toLocaleTimeString('en-GB')}</p>
                <p>{d.toLocaleDateString()}</p>
            </div> 
        </div>
    )
}

export default SearchResult
