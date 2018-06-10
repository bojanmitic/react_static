import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

const MiddleSmall = (props) => {
    const wordArr = props.header.split(' '); 
    return (
        <div className ="middleSmall">
            <i className="fa fa-mobile" aria-hidden="true"></i>
            
            <div><strong>{wordArr[0]}</strong> {wordArr[1]}</div>
            <p>{props.paragraph}</p>
            <button className="btn-blue btn-middle-small">READ MORE</button>
        </div>
    )
}

export default MiddleSmall;