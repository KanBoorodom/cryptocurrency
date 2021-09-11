import React from 'react'
import {Link} from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
            <header className = 'landing__header'>
                <p className = 'landing__header--p'>Welcome to ...</p>
                <h1 className = 'landing__header--header'>KBCrypto</h1>
                <p className = 'landing__header--p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, fuga?</p>
                    <Link className = 'landing__header--btn' to = "/home">Enter website</Link>
            </header>
    )
}

export default Header
