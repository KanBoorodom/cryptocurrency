import React from 'react'
import Contact from './Contact'
import './footer.css'

const Footer = () => {
    return (
        <footer className = "footer">
            <p>KBCurrency created by Kan.</p>
            <div className = "footer__contactContainer">
                <Contact class1 = "fab" class2 = "fa-line" info = "https://line.me/ti/p/8DKPQeEnNA"/>
                <Contact class1 = "fab" class2 = "fa-github-square" info = "https://github.com/KanBoorodom/cryptocurrency.git"/>
            </div>
            <p>© 2021 KBcurrency all right reserved.</p>
        </footer>
    )
}

export default Footer
