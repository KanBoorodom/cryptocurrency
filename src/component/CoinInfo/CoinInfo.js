import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Loader from "react-loader-spinner";
import '../coin.css'
import './coinInfo.css'
import CoinValue from './CoinValue';
import Exchange from './Exchange';
import BottomGraph from './BottomGraph';
import TopSearch from './TopSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import useFetch from '../useFetch';

const CoinInfo = () => {
    const [day,setDay] = useState('1')
    let { pageNow,coinName,currencySelected } = useParams();

    const {data,loading} = useFetch(`https://api.coingecko.com/api/v3/coins/${coinName}`)
    if(!loading){
        const coinInfo = {
            'cName':data.name,
            'symbol':data.symbol.toUpperCase(),
            'web':data.links.homepage[0],
            'img':data.image.small,
            'rank':data.market_cap_rank,
            'currentPrice':data.market_data.current_price[`${currencySelected}`],
            'changePercentage':data.market_data.price_change_percentage_24h_in_currency[`${currencySelected}`],
            'marketCap':data.market_data.market_cap[`${currencySelected}`].toLocaleString(),
            'marketVolume':data.market_data.total_volume[`${currencySelected}`].toLocaleString(),
            'dayHigh':data.market_data.high_24h[`${currencySelected}`].toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':4}),
            'dayLow':data.market_data.low_24h[`${currencySelected}`].toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':4}),
            'ath':data.market_data.ath[`${currencySelected}`],
            'athPercentage':data.market_data.ath_change_percentage[`${currencySelected}`],
            'athDate':data.market_data.ath_date[`${currencySelected}`],
            'atl':data.market_data.atl[`${currencySelected}`],
            'atlPercentage':data.market_data.atl_change_percentage[`${currencySelected}`],
            'atlDate':data.market_data.atl_date[`${currencySelected}`],
            'priceChange':data.market_data.price_change_percentage_24h_in_currency[`${currencySelected}`]
        }
        return (
            <section className = "coinInfo">
                <>
                    <Link 
                        to = {`/coins/${pageNow}`}
                        style = {{color:'#ffe700',display:'inline',cursor:'pointer'}}
                    >
                        Coins
                        <FontAwesomeIcon 
                            style = {{fontSize:'.75rem',margin:'0 .25em'}}
                            icon={faChevronRight}
                        />
                    </Link>  
                    <span style = {{color:'white',textTransform:'capitalize',display:'inline'}}>
                        {coinName}
                    </span>
                    
                    <div className = "coinInfo__container">   
                        <div className = "coinInfo__top">   
                            <CoinValue coinInfo = {coinInfo} currencySelected = {currencySelected} />
                            <div className = "coinInfo__top__right">
                                <Exchange 
                                    symbol = {coinInfo.symbol}
                                    price = {coinInfo.currentPrice}
                                    currencySelected = {currencySelected}                                        
                                />
                                <a 
                                    href = "https://promo.bitkub.com" 
                                    className = "coinInfo__topRight__leftBottom"
                                >
                                    Start <br/> Investment
                                    <i className ="fab fa-bitcoin"></i>
                                </a>
                                <a 
                                    href= {coinInfo.web} 
                                    className = "coinInfo__topRight__rightBottom"
                                >
                                    Visit <br/> Website
                                    <i className ="fas fa-globe-asia"></i> 
                                </a>
                            </div>
                        </div>    
                        <div className = "coinInfo__bot">   
                            <BottomGraph day = {day} setDay = {setDay} coinName = {coinName}
                                        currencySelected = {currencySelected} priceChange = {coinInfo.priceChange}            
                            />  
                            <TopSearch/>
                        </div>
                    </div>
                </>
        </section> )
    }

    return  <Loader type="Puff" color="#00BFFF" height={500} width={500} style = {{display:'flex', justifyContent:'center'}}/>
}

export default CoinInfo
