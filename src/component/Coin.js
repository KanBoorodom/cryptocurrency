import React,{memo} from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';
import LineGraph from './LineGraph';
import './coin.css'
/* 
    About memo and useMemo
    React.memo() is a higher-order component that we can use to wrap components
    useMemo() is a React Hook that we can use to wrap functions within a component.
    https://blog.logrocket.com/react-memo-vs-usememo/
*/
const Coin = ({coin,currencySelected,searchAll}) => {
    var d = new Date();
    let {pageNow} = useParams()
    return (
        <div className = {`coin ${coin.price_change_percentage_24h > 0 ? 'coin__top--green' : 'coin__top--red'}`}>
            <img className = "coin__img" src= {coin.image}  alt="crypto" />
            <div className = "coin__data">
                <Link className = "coin__name" to = {`/coins/page=${pageNow}/${coin.id.toLowerCase()}/currency=${currencySelected}`} >
                    {coin.name} <br/>({coin.symbol.toUpperCase()})
                </Link>
                <p className="coin__price">{currencySelected} {coin.current_price.toLocaleString()}</p>
                <p className="coin__volume">Mkt Cap <br/>{currencySelected.toUpperCase()} {coin.market_cap.toLocaleString()}</p>
                <p className = "coin__priceChange" style = {{backgroundColor:coin.price_change_percentage_24h > 0 ? '#1b7642' : '#722727'}}>24h change 
                    <br />
                    {
                        coin.price_change_percentage_24h > 0 
                        ?   <span style = {{fontSize: '2rem',color:'#d5fbdb'}}> 
                                +{coin.price_change_percentage_24h.toFixed(2)}%
                            </span>
                        :   <span style = {{fontSize: '2rem',color:'#fbd5d5'}}> 
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </span>
                    }
                </p>
            </div>
            <LineGraph id = {coin.id} day = {1} searchAll = {searchAll} currencySelected = {currencySelected} 
                        priceChange = {coin.price_change_percentage_24h}
            />
            <div className="coin__updatetime">
                <p>Last update {d.toLocaleTimeString('en-GB')}</p>
                <p>{d.toLocaleDateString()}</p>
            </div> 
        </div>
    )
}

export default memo(Coin)
