import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import Loader from "react-loader-spinner"; /* https://www.npmjs.com/package/react-loader-spinner */
import './home.css';
import Logo from './Logo';
import Coin from './Coin';
import Coinsearch from './Coinsearch';
import CurrencyDropdown from './CurrencyDropdown';
import Pagination from './Pagination';

const Home = ({currentPage,setCurrentPage,currencySelected,setCurrencySelected}) => {
    const [coins,setCoins] = useState([])
    const [currency,setCurrency] = useState([])
    const [search,setSearch] = useState('')
    const [searchAll,setSearchAll] = useState('')
    const [searchResult,setSearchResult] = useState({})
    const [loading,setLoading] = useState()

    const firstRender = useRef(true)
    
    /* Fetch all coin data in page*/
    useEffect(() => {
      const loadData = async () => {
        try{
          setLoading(true)
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencySelected}&order=market_cap_desc&per_page=12&page=${currentPage}&sparkline=false`)
          setCoins(response.data)
          setLoading(false)
          console.log(response.data)
          window.scrollTo(0,0)
        }
        catch (e) {
          console.log(e)
        }
      }
      loadData()
    }, [currencySelected,currentPage])
  
    /* Fetch custom search */
    useEffect(()=>{
      const searchCoin = async () => {
          try{
            setLoading(true)
            /* รูปแบบข้อมูลที่ได้จากการ fetch ไม่เหมือนการ fetch หลายๆเหรียญ */
            const searchResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${searchAll}`)
            setSearchResult(
              {
                'name':searchResponse.data.name,
                'id' : searchResponse.data.id,
                'image' : searchResponse.data.image.large, 
                'symbol' : searchResponse.data.symbol,
                'market_cap' : searchResponse.data.market_data.market_cap[`${currencySelected}`],
                'current_price' : searchResponse.data.market_data.current_price[`${currencySelected}`],
                'price_change_percentage_24h' : searchResponse.data.market_data.price_change_percentage_24h_in_currency[`${currencySelected}`]
              }
            )
            setLoading(false)
          }
          catch (e) {
            alert('Coin not found...')
            setSearch('')
            setSearchAll('')
            setLoading(false)
          }
      }

      if(! firstRender.current){searchCoin()}
    }
    ,[searchAll,currencySelected])
  
    /* เวลาเปลี่ยนหน้าล้างค่าที่ search ไว้ */
    useEffect(()=>{
      setSearchAll('')
      setSearch('')
    },[currentPage])
  
    /* Fetch all Currency unit*/
    useEffect(() => {
      const loadCurrency = async () => {
        try{
          const response = await axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
          setCurrency(response.data.sort())
        }
        catch (e) {
          console.log(e)
        }
      }
      loadCurrency()
      firstRender.current = false
    }, [])
  
    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().replace(/\s/g, "").includes(search)
    )
    return (
      <>
        <Logo />
        <Coinsearch search = {search} setSearch = {setSearch} setSearchAll = {setSearchAll}/>
        <CurrencyDropdown 
          currencySelected = {currencySelected} 
          setCurrencySelected = {setCurrencySelected}
          currency = {currency}
        />
        {/* if search active show only one pagination (at bttm) */}
        {search.length === 0 && <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>}
        <div className="coin__container">
        {Object.keys(searchResult).length !== 0 && 
                <Coin 
                  /* coin = {searchResult.data} */
                  coin = {searchResult}
                  currencySelected = {currencySelected}
                  searchAll = {searchAll}
                />
          }
          {loading ?       
            <Loader
              type="Puff"
              color="#00BFFF"
              height={500}
              width={500}
              className = 'loader'
            />
            : Object.keys(searchResult).length === 0 ? filteredCoins.map(coin => {
              return  <Coin 
                        key = {coin.id} 
                        coin = {coin}
                        currencySelected = {currencySelected}
                        searchAll = {searchAll}
                      />
            })
          : null}
        </div>
        <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>
        
      </>
    );
}

export default Home