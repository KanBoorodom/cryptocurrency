/* API https://www.coingecko.com/en/api/documentation */
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from "react-loader-spinner";
/* https://www.npmjs.com/package/react-loader-spinner */

import './App.css';
import Coin from './component/Coin';
import Coinsearch from './component/Coinsearch';
import SearchResult from './component/SearchResult';
import CurrencyDropdown from './component/CurrencyDropdown';
import Pagination from './component/Pagination';

function App() {
  const [coins,setCoins] = useState([])
  const [search,setSearch] = useState('')
  const [searchAll,setSearchAll] = useState('')
  const [searchResult,setSearchResult] = useState([])
  const [currency,setCurrency] = useState([])
  const [currncySelected,setCurrncySelected] = useState('thb')
  const [loading,setLoading] = useState()
  const [currentPage,setCurrentPage] = useState(1)

  /* Fetch all coin data in page*/
  useEffect(() => {
    const loadData = async () => {
      try{
        setLoading(true)
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currncySelected}&order=market_cap_desc&per_page=30&page=${currentPage}&sparkline=false`)
        console.log(response.data)
        setCoins(response.data)
        setLoading(false)
        window.scrollTo(0,0)
      }
      catch (e) {
        console.log(e)
      }
    }
    loadData()
  }, [currncySelected,currentPage])

  /* Fetch custom search */
  useEffect(()=>{
    const searchCoin = async () => {
      if(searchAll !== ''){
        try{
          setLoading(true)
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${searchAll}`) 
          setSearchResult(response.data)
          setLoading(false)
        }
        catch (e) {
          console.log(e)
          alert('Coin not found...')
          setSearch('')
          setLoading(false)
        }
      }
      else{setSearchResult([])}
    }
    searchCoin()
  }
  ,[searchAll])

  /* เวลาเปลี่ยนหน้าลางค่าที่ search ไว้ */
  useEffect(()=>{
    setSearchAll('')
    setSearch('')
  },[currentPage])

  /* Fetch all Currency unit*/
  useEffect(() => {
    const loadCurrency = async () => {
      try{
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
        console.log(response.data)
        setCurrency(response.data.sort())
      }
      catch (e) {
        console.log(e)
      }
    }
    loadCurrency()
  }, [])

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="coinapp">
      {searchResult.length !== 0 && <div></div>}
      <h1 className="coinapp__name">cryptocurrency</h1>
      <Coinsearch search = {search} setSearch = {setSearch} setSearchAll = {setSearchAll}/>
      <CurrencyDropdown 
        currncySelected = {currncySelected} 
        setCurrncySelected = {setCurrncySelected}
        currency = {currency}
      />
      {search.length === 0  && <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>}
      <div className="coin__container">
      {searchResult.length !== 0 && 
              <SearchResult 
                name = {searchResult.name}
                image = {searchResult.image.large} 
                symbol = {searchResult.symbol}
                volume = {searchResult.market_data.market_cap[`${currncySelected}`]}
                currncySelected = {currncySelected}
                price = {searchResult.market_data.current_price[`${currncySelected}`]}
                priceChange = {searchResult.market_data.price_change_percentage_24h_in_currency[`${currncySelected}`]}  
        />}
        {loading ?       
          <Loader
            type="Puff"
            color="#00BFFF"
            height={500}
            width={500}
            className = 'loader'
          />
          :searchResult.length === 0 ? filteredCoins.map(coin => {
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
        :''}
      </div>
      <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>
      
    </div>
  );
}

export default App;
