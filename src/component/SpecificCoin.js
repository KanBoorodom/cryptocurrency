import React from 'react'
import useFetch from './useFetch'
import Coin from './Coin'
import Loader from "react-loader-spinner";
import './home.css'

const SpecificCoin = ({searchAll,setSearchAll,setSearch,currencySelected}) => {

    const {data,loading,error} = useFetch(`https://api.coingecko.com/api/v3/coins/${searchAll}`)
    const clickHandle = ()=>{
        setSearch('')
        setSearchAll('')
    }
    if(error){
        return (
            <div className = 'notfound'>
                <h2>Oooops coin not found...</h2>
                <button onClick = {clickHandle} >Go back</button>
            </div>
        )
    }
    if(!loading){
        const searchData = 
        {
          'name':data.name,
          'id' : data.id,
          'image' : data.image.large, 
          'symbol' : data.symbol,
          'market_cap' : data.market_data.market_cap[`${currencySelected}`],
          'current_price' : data.market_data.current_price[`${currencySelected}`],
          'price_change_percentage_24h' : data.market_data.price_change_percentage_24h_in_currency[`${currencySelected}`]
        }
        return (
            <>
                    <Coin 
                        coin = {searchData}
                        currencySelected = {currencySelected}
                        searchAll = {searchAll}
                    />
            </>
        )   
    }
    return <Loader type="Puff" color="#00BFFF" height={500} width={500} className = 'loader'/>
}

export default SpecificCoin
