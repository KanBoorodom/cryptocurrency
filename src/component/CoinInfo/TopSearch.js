import React from 'react'
import { Link } from 'react-router-dom'
import './coinInfo.css'
const TopSearch = ({topCoin}) => {
    const clickHandle = ()=>{
        window.scrollTo(0, 0)
    }
    return (
        <div className = "topSearch">
            <div className = "topSearch__coinContainer">
                {topCoin.map((t,index) =>     
                    <Link 
                        className = "topSearch__coin" 
                        key = {index} 
                        to = {`/coins/${t.item.id.toLowerCase()}`}
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
        </div>
    )
}

export default TopSearch
