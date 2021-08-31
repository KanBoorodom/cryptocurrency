import React from 'react'
import './pagination.css'
const Pagination = ({currentPage,setCurrentPage}) => {
    var totalPage = []
    for(let i=1; i<11; i++){
        totalPage.push(i)
    }
    const onClick = e =>{
        if( parseInt(e.target.innerHTML) === currentPage){
            window.location.reload()
        }
        else{
            setCurrentPage(parseInt(e.target.innerHTML))
        }
    }
    return (
        <nav>
            <ul className = 'pagination__ul'>
                {totalPage.map(p => 
                    <li 
                        onClick = {onClick}
                        className = {`pagination__page ${currentPage === p && 'pagination__page--active'}`} 
                        key = {p}
                    >{p} 
                    </li>)
                }
            </ul>            
        </nav>
    )
}

export default Pagination
