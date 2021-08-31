import React from 'react'
import './coinsearch.css'
const Coinsearch = ({search,setSearch,setSearchAll}) => {
    const handleChange = e => {
        setSearch(e.target.value)
    }

    const keyDown = e =>{
        if(e.key === 'Enter' && search.length !== 0){
            e.preventDefault()
            console.log(search.toLowerCase().replace(/\s+/g, '-'))
            setSearchAll(search.toLowerCase().replace(/\s+/g, '-'))
        }
        else if(e.key === 'Enter' && search.length === 0){
            e.preventDefault()
        }
        if(e.key === 'Backspace' && search.length === 1){
            setSearchAll('')
            setSearch('')
        }
    }
    return (
        <div className = 'coinsearch'>
            <form action="" className = 'coinsearch__form'>
                <label htmlFor="searchPage">{search === '' ? 'Search' : 'Press enter for searching'}</label>
                <input type="text" 
                    placeholder = 'Enter coin name..'
                    id = 'searchPage'
                    className = 'coinsearch__input'
                    value = {search}
                    onChange = {handleChange}
                    onKeyDown = {keyDown}
                />             
            </form>
        </div>
    )
}

export default Coinsearch
