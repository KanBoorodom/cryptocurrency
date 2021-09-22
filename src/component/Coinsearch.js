import React from 'react'
import './coinsearch.css'
const Coinsearch = ({search,setSearch,setSearchAll}) => {
    const toCapital = (string) => string.charAt(0).toUpperCase() + string.slice(1);
      
    const handleChange = e => {
        setSearch(toCapital(e.target.value))
    }

    const keyDown = e =>{
        if(e.key === 'Backspace' && search.length === 1){
            setSearchAll('')
            setSearch('')
        }
    }
    const submitHandle = e => {
        e.preventDefault()
        setSearchAll(search.toLowerCase().replace(/\s+/g, '-'))
    }
    return (
        <div className = 'coinsearch'>
            <form action="" className = 'coinsearch__form' onSubmit = {submitHandle}>
                <label htmlFor="searchPage">{search === '' ? 'Search' : 'Press enter for searching'}</label>
                <input type="text" 
                    placeholder = 'Enter coin name..'
                    maxLength = "20"
                    id = 'searchPage'
                    className = 'coinsearch__input'
                    required
                    autoComplete = 'off'
                    value = {search}
                    onChange = {handleChange}
                    onKeyDown = {keyDown}
                />             
            </form>
        </div>
    )
}

export default Coinsearch
