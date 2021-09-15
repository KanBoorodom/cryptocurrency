import React from 'react'
import {Link} from 'react-router-dom';
import './header.css'
import Logo from '../Logo';
const Header = () => {
    return (
            <header className = 'landingHeader'>
                <Logo/>
                <p className = 'landingHeader__p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, fuga?</p>
                    <Link className = 'landingHeader__btn' to = "/coins">Enter website</Link>
            </header>
    )
}

export default Header
