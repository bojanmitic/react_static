import React from 'react';
import './App.css';

const BlueDiv = (props)=>{
    return (
        <div className="blueBubble">
            <p>{props.text}</p>
            <button className="btn-white">{props.textInButton}</button>
        </div>
    )
}

export default BlueDiv;
