import React from 'react'
import './coinsearch.css'
const Coinsearch = ({setSearch}) => {
    const handleChange = e => {
        setSearch(e.target.value)
    }

    return (
        <div className = 'coinsearch'>
            <form action="">
                <input type="text" 
                placeholder = 'Search in page'
                className = 'coinsearch__input'
                onChange = {handleChange}
            />
            </form>
        </div>
    )
}

export default Coinsearch
