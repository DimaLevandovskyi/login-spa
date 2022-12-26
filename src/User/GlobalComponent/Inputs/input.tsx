import React from 'react'
import "./input.css";

export default function input(props) {
   
    return (
        <>
            <input placeholder={props.placeholder} className='input' type='text'/>
        </>
    )
}
