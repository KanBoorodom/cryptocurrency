import React from 'react'
const CoinValue = ({coinInfo,currencySelected})=>{
    /* Date data is in JSON format */
    const changeDateFormat = (date)=>{
        const d = new Date(date)
        return `${d.toLocaleString('default', { month: 'short' })} ${d.getDate()}, ${d.getFullYear()}`
    }

    return (
        <div className = "coinInfo__top__left">                  
            <div className = "coinInfo__head">
                <img className = "coinInfo__head__img" src={coinInfo.img} alt="coin" />
                <div style = {{position:'relative',marginLeft:'1.5em'}}>
                    <p className = "coinInfo__head__rank">MarketCap Rank {coinInfo.rank}</p>
                    <h1 className = "coinInfo__head__name">{coinInfo.cName} ({coinInfo.symbol})</h1>
                </div>
            </div>
            <div style = {{position:'relative',marginBottom:'2em'}}>
                <p className = "coinInfo__price"> 
                    {currencySelected} {coinInfo.currentPrice.toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':4})}
                </p>
                <p 
                    className = {`coinInfo__priceChange ${coinInfo.changePercentage < 0 && '--red'}`}   
                >
                    {coinInfo.changePercentage.toFixed(2)}%
                </p>
            </div>
            <div className = "coinInfo__value">
                    <p>Market Cap <span> {currencySelected} {coinInfo.marketCap}</span></p>    
                    <p>Trading Volume<span> {currencySelected} {coinInfo.marketVolume}</span></p>    
                    <p>24 Hour High<span> {currencySelected} {coinInfo.dayHigh}</span></p>    
                    <p>24 Hour Low<span> {currencySelected} {coinInfo.dayLow}</span></p>    
                    <p>All-Time High
                        <span> {currencySelected} {coinInfo.ath}</span>
                        <span className = "coinInfo__value__ATPercentage" style = {{color:`${coinInfo.athPercentage > 0 ? '#2bba2b':'#ee3535'}`}}>
                            {coinInfo.athPercentage.toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':2})}%
                        </span>
                        <span className = "coinInfo__value__ATDate">{changeDateFormat(coinInfo.athDate)}</span>
                    </p>
                    <p>All-Time Low
                        <span> {currencySelected} {coinInfo.atl}</span>
                        <span className = "coinInfo__value__ATPercentage" style = {{color:`${coinInfo.athPercentage < 0 ? '#2bba2b':'#ee3535'}`}}>
                            {coinInfo.atlPercentage.toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':2})}%
                        </span>
                        <span className = "coinInfo__value__ATDate">{changeDateFormat(coinInfo.atlDate)}</span>
                    </p>       
            </div> 
        </div>  )
}
export default CoinValue
