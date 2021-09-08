import React,{useState} from 'react'
import './footer.css'
const Contact = ({class1,class2,info}) => {
    const [infoClick,setInfoClick] = useState(false)
    const mouseDown = ()=>{
        setInfoClick(false)
    }
    const mouseUp = ()=>{
        setInfoClick(true)
        var x = document.createElement("INPUT")
        x.value = info
        navigator.clipboard.writeText(x.value);
    }

    return (
        <>
            <i className = {`${class1} ${class2} ${infoClick && 'gelatine'}`} onMouseDown = {mouseDown} onMouseUp = {mouseUp} ></i>
        </>
    )
}

export default Contact
