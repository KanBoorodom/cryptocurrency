import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Loader from "react-loader-spinner";
import '../coin.css'
import './coinInfo.css'
import Exchange from './Exchange';
import DaySelect from './DaySelect';
import LineGraph from '../LineGraph'
import TopSearch from './TopSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'

const CoinInfo = ({currencySelected}) => {
    const [coinInfo,setCoinInfo] = useState([])
    const [topCoin,setTopCoin] = useState([])
    const [loadInfo,setLoadInfo] = useState(true)
    const [day,setDay] = useState('1')
    let { coinName } = useParams();

    useEffect(() => {
        const loadCoinInfo = async () => {
          try{
            setLoadInfo(true)
            const response = (await axios.get(`https://api.coingecko.com/api/v3/coins/${coinName}`)).data
            setCoinInfo({
                'cName':response.name,
                'symbol':response.symbol.toUpperCase(),
                'web':response.links.homepage[0],
                'img':response.image.small,
                'rank':response.market_cap_rank,
                'currentPrice':response.market_data.current_price[`${currencySelected}`],
                'changePercentage':response.market_data.price_change_percentage_24h_in_currency[`${currencySelected}`],
                'marketCap':response.market_data.market_cap[`${currencySelected}`].toLocaleString(),
                'marketVolume':response.market_data.total_volume[`${currencySelected}`].toLocaleString(),
                'dayHigh':response.market_data.high_24h[`${currencySelected}`].toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':4}),
                'dayLow':response.market_data.low_24h[`${currencySelected}`].toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':4}),
                'ath':response.market_data.ath[`${currencySelected}`],
                'athPercentage':response.market_data.ath_change_percentage[`${currencySelected}`],
                'athDate':response.market_data.ath_date[`${currencySelected}`],
                'atl':response.market_data.atl[`${currencySelected}`],
                'atlPercentage':response.market_data.atl_change_percentage[`${currencySelected}`],
                'atlDate':response.market_data.atl_date[`${currencySelected}`],
                'priceChange':response.market_data.price_change_percentage_24h_in_currency[`${currencySelected}`]
            })
            setLoadInfo(false)
          }
          catch (e) {
            console.log(e)
          }
        }
        loadCoinInfo()
      }, [coinName,currencySelected])

      useEffect(() => {
        const loadTopCoin = async () => {
          try{
            const response = (await axios.get(`https://api.coingecko.com/api/v3/search/trending`)).data
            setTopCoin(response.coins)
            console.log(response)
          }
          catch (e) {
            console.log(e)
          }
        }
        loadTopCoin()
      }, [])

      /* Date data is in JSON format */
      const changeDateFormat = (date)=>{
        const d = new Date(date)
        return `${d.toLocaleString('default', { month: 'short' })} ${d.getDate()}, ${d.getFullYear()}`
      }
    return (
        <section className = "coinInfo">
            { loadInfo ?             
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={500}
                    width={500}
                    style = {{display:'flex', justifyContent:'center'}}
                />
                : 
                <>
                    <Link 
                        to = "/coins"
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
                            </div>  

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
                            <div className = "coinInfo__bot__graphSide">
                                <DaySelect day = {day} setDay = {setDay} />
                                <LineGraph id = {coinName} searchAll = {''} day = {day} currencySelected = {currencySelected} priceChange = {coinInfo.priceChange}/>
                            </div>     
                            <div>
                                <h2 style = {{fontSize:'2rem',textAlign:'center',marginTop:'1em'}}>24h Top search coins</h2>
                                <TopSearch topCoin = {topCoin}/>
                            </div>
                        </div>
                    </div>
                </>
            }
        </section>
    )
}

export default CoinInfo
