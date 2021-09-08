import React from 'react'
import Contact from './Contact'
import './footer.css'

const Footer = () => {
    return (
        <footer className = "footer">
            <h2>KBCrypto</h2>
            <p>Create by Kan</p>
            <div className = "footer__contactContainer">
                <Contact class1 = "fab" class2 = "fa-line" info = "https://line.me/ti/p/8DKPQeEnNA"/>
                <Contact class1 = "fab" class2 = "fa-github-square" info = "https://github.com/KanBoorodom/cryptocurrency.git"/>
                <Contact class1 = "fas" class2 = "fa-envelope-square" info = "kan.boorodom@gmail.com"/>
            </div>
        </footer>
    )
}

export default Footer
