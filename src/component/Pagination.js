import React from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';
import './pagination.css'
const Pagination = () => {
    var totalPage = [1,2,3,4,5,6,7,8,9,10]

    let {pageNow} = useParams()
    return (
        <nav>
            <ul className = 'pagination__ul'>
                {totalPage.map(p => 
                    <Link to = {`/coins/${p}`} key = {p}>
                        <li 
                            className = {`pagination__page ${p === parseInt(pageNow) && 'pagination__page--active'}`}
                        >
                            {p}
                        </li>
                    </Link>)  
                }
            </ul>    
        </nav>
    )
}

export default Pagination
