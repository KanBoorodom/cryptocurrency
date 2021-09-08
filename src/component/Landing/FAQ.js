import React from 'react'
import './faq.css'
import faqData from './FAQdata'
import QA from './QA'
const FAQ = () => {

    return (
        <div className = "faq">
            <h2 className = "faq__head">Frequently Asked Questions</h2>
            {
                faqData.map((faq,index)=> <QA 
                            question = {faq.question}
                            answer = {faq.answer}
                            key = {index}
                    />
                )
            }
        </div>
    )
}

export default FAQ
