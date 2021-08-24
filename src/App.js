/* API https://www.coingecko.com/en/api/documentation */
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from "react-loader-spinner";
/* https://www.npmjs.com/package/react-loader-spinner */

import './App.css';
import Coin from './component/Coin';
import Coinsearch from './component/Coinsearch';
import CurrencyDropdown from './component/CurrencyDropdown';
import Pagination from './component/Pagination';

function App() {
  const [coins,setCoins] = useState([])
  const [search,setSearch] = useState('')
  const [currency,setCurrency] = useState([])
  const [currncySelected,setCurrncySelected] = useState('thb')
  const [loading,setLoading] = useState()
  const [currentPage,setCurrentPage] = useState(1)
  /* let time = new Date.toLocaleTimeString() */
  useEffect(() => {
    setLoading(true)
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currncySelected}&order=market_cap_desc&per_page=30&page=${currentPage}&sparkline=false`)
    .then(res => {
        setCoins(res.data)
        setLoading(false)
      })
    .catch(error => console.log(error));
  }, [currncySelected,currentPage])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
    .then(res => {
      setCurrency(res.data.sort())
      console.log('Fetch currency')
    })
    .catch(err => console.log(err))
  }, [])
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="coinapp">
      <h1 className="coinapp__name">cryptocurrency</h1>
      <Coinsearch setSearch = {setSearch} />
      <CurrencyDropdown 
        currncySelected = {currncySelected} 
        setCurrncySelected = {setCurrncySelected}
        currency = {currency}
      />
      {loading ?       
        <Loader
          type="Puff"
          color="#00BFFF"
          height={500}
          width={500}
          className = 'loader'
        />
        :filteredCoins.map(coin => {
          return <Coin 
                    key = {coin.id} 
                    name = {coin.name}
                    image = {coin.image} 
                    symbol = {coin.symbol}
                    volume = {coin.market_cap}
                    currncySelected = {currncySelected}
                    price = {coin.current_price}
                    priceChange = {coin.price_change_percentage_24h}  
                />
        })
      }
      <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage} />
      
    </div>
  );
}

export default App;
