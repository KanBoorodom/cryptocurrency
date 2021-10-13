import React from 'react'
import useFetch from './useFetch'
import Coin from './Coin'
const SpecificCoin = ({searchAll,setSearchAll,setSearch,currencySelected,currentPage}) => {

    const {data,loading,error} = useFetch(`https://api.coingecko.com/api/v3/coins/${searchAll}`)
    console.log(data)
    console.log(loading)
    if(error){
        alert('Coin not found...')
        setSearch('')
        setSearchAll('')
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
                        currentPage = {currentPage}
                        currencySelected = {currencySelected}
                        searchAll = {searchAll}
                    />
            </>
        )   
    }
}

export default SpecificCoin



/* 
import {useState, useEffect} from 'react'
import axios from 'axios'
const useFetch = (url) => {
    const [data,setData] = useState([])
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(true)

    console.log('Usefetch render')
    useEffect( () => {
        console.log('Usefetch useeffect')
        const abortController = new AbortController() /* use for clean up  
        const signal = abortController.signal
        const fetchData = async () => {
            console.log(abortController.signal.aborted)
            try{
                if (!abortController.signal.aborted){
                    setLoading(true)
                    const res = await axios.get(url,{signal})    
                    setData(res.data)
                }
            }
            catch(err){
                if (!abortController.signal.aborted) {
                    console.log(err)
                    setError(true)    
                }
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
        return ()=>{
            console.log('abort')
            abortController.abort()
        }
    },[url])
    return {data, error, loading}
}
export default useFetch
*/

/* 
import React, {useState, useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import Loader from "react-loader-spinner"; 
import Logo from './Logo';
import Coin from './Coin';
import SpecificCoin from './SpecificCoin';
import Coinsearch from './Coinsearch';
import CurrencyDropdown from './CurrencyDropdown';
import Pagination from './Pagination';
import useFetch from './useFetch';
import './home.css';

const Home = () => {
    const [search,setSearch] = useState('')
    const [searchAll,setSearchAll] = useState('')
    const [currencySelected,setCurrencySelected] = useState('thb')
    const [currentPage,setCurrentPage] = useState(1)
    const firstRender = useRef(true)
    let {pageNow} = useParams()

    useEffect(() => {
      firstRender.current = false
    }, [])
    useEffect(()=>{
      setCurrentPage(pageNow)
    },[pageNow])
    useEffect(()=>{
      setSearchAll('')
      setSearch('')
      console.log('home render')
    },[currentPage])

    var {data,loading} = useFetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencySelected}&order=market_cap_desc&per_page=12&page=${pageNow}&sparkline=false`)    
    var filteredCoins = data.filter(coin =>
      coin.name.toLowerCase().replace(/\s/g, "").includes(search)
    )
  
    return (
      <>
        <Logo />
        <Coinsearch search = {search} setSearch = {setSearch} setSearchAll = {setSearchAll}/>
        <CurrencyDropdown 
          currencySelected = {currencySelected} 
          setCurrencySelected = {setCurrencySelected}
        />
        {!search && <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>}
        {
          loading ? <Loader type="Puff" color="#00BFFF" height={500} width={500} className = 'loader'/>
          :
            <div className="coin__container">
              {
                searchAll ?  <SpecificCoin 
                                searchAll = {searchAll} setSearchAll = {setSearchAll}
                                setSearch = {setSearch}
                                currentPage = {currentPage} 
                                currencySelected = {currencySelected}  
                              /> 
                :filteredCoins.map(coin => {
                    return  <Coin 
                              key = {coin.id} 
                              coin = {coin}
                              currentPage = {currentPage}
                              currencySelected = {currencySelected}
                              searchAll = {searchAll}
                            />
                  })
              }
            </div>
        }
        <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>         
      </>
    );
}
export default Home 
*/