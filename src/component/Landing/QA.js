import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './faq.css'

const QA = ({question,answer}) => {
    const [activeAnswer,setActiveAnswer] = useState(false)
    const showAnswer = (e)=>{
        setActiveAnswer(!activeAnswer)
    }
    return (
        <div className = "qa" style = {activeAnswer ? {borderBottom:'none'} : {borderBottom:'2px solid #9ac7c1'}} onClick = {showAnswer}>
            <div className = "faq__question">
                <p>{question}</p>
                <FontAwesomeIcon className = {activeAnswer ? 'faq__question--arrowUp' : 'faq__question--arrowDown'} icon={faChevronDown}/>
            </div>
            <p className = {`faq__answer ${activeAnswer && 'faq__answer--active'}`} >{answer}</p>
        </div>
    )
}

export default QA
