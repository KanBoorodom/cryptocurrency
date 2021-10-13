import React from 'react'
import Loader from "react-loader-spinner";
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import './coinInfo.css'
import useFetch from '../useFetch'

const TopSearch = () => {

    let { pageNow,currencySelected } = useParams();
    
    const clickHandle = ()=>{
        window.scrollTo(0, 0)
    }
    const {data,loading} = useFetch(`https://api.coingecko.com/api/v3/search/trending`)

    loading && <Loader className = 'coin--load' type="ThreeDots" color="#00BFFF" height={80} width={100} /> 
    return (
        <div>
            <h2 style = {{fontSize:'2rem',textAlign:'center',marginTop:'1em'}}>24h Top search coins</h2>
            <div className = "topSearch">
                {!loading &&
                    <div className = "topSearch__coinContainer">
                        {data.coins.map((t,index) =>     
                            <Link 
                                className = "topSearch__coin" 
                                key = {index} 
                                to = {`/coins/page=${pageNow}/${t.item.id.toLowerCase()}/currency=${currencySelected}`}
                                onClick = {clickHandle}
                            >
                                <div>
                                    <img src={t.item.small} alt="Top search coin" />
                                    <p className = "topSearch__coin__coinName" >{t.item.name}</p>
                                </div>
                                <p className = "topSearch__coin__coinRank">Rank <br />{t.item.market_cap_rank}</p>
                            </Link>
                            )   
                        }
                    </div>
                }
            </div>
        </div>
        )
    }

export default TopSearch
