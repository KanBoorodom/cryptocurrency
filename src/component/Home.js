import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loader from "react-loader-spinner"; /* https://www.npmjs.com/package/react-loader-spinner */
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
    let {pageNow} = useParams()

    /* เวลาเปลี่ยนหน้าล้างค่าที่ search ไว้ */
    useEffect(()=>{
      setSearchAll('')
      setSearch('')
      window.scrollTo(0, 0)
    },[pageNow])
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
        {/* if search active show only one pagination (at bttm) */}
        {!search && <Pagination/>}
        {
          loading ? <Loader type="Puff" color="#00BFFF" height={500} width={500} className = 'loader'/>
          :
            <div className="coin__container">
              {
                searchAll ?  <SpecificCoin 
                                searchAll = {searchAll} setSearchAll = {setSearchAll}
                                setSearch = {setSearch}
                                currencySelected = {currencySelected}  
                              /> 
                :filteredCoins.map(coin => {
                    return  <Coin 
                              key = {coin.id} 
                              coin = {coin}
                              currencySelected = {currencySelected}
                              searchAll = {searchAll}
                            />
                  })
              }
            </div>
        }
        <Pagination/>         
      </>
    );
}

export default Home