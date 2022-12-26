import React from 'react'
import "./buttonPrimary.css";

export default function button(props) {
    let onClick = () =>{
        window.location.pathname = `${props.path}`
    }
    return (
        <>
            <button className='button' onClick={onClick} type='submit'>{props.buttonText}</button>
        </>
    )
}
