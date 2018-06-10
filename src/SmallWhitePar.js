import React from 'react';
import './App.css';

const SmallWhitePar = (props) => {
    return (
        <div className = "smallWhitePar">
            <h4>{props.title}</h4>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default SmallWhitePar;