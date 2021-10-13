import React,{useState} from 'react'
import './footer.css'
const Contact = ({class1,class2,info}) => {
    const [infoClick,setInfoClick] = useState(false)
    const mouseDown = ()=>{
        setInfoClick(false)
    }
    const mouseUp = ()=>{
        setInfoClick(true)
    }

    return (
        /*  
            _blank have vulnerability for phishing
            add rel="noopener noreferrer"      
        */
        <a href = {info} target="_blank" rel="noopener noreferrer">
            <i className = {`${class1} ${class2} ${infoClick && 'gelatine'}`} onMouseDown = {mouseDown} onMouseUp = {mouseUp} ></i>
        </a>
    )
}

export default Contact
