import React from 'react';
import './App.css';


const Footer = (props)=>{
    return(
        <div className="footer">
            <div className="footerCol" >
                <h3>{props.about}</h3>
                <p>{props.aboutPar}</p>
                <p>{props.streetName}</p>
                <p>{props.city}</p>
                <p>{props.phone}</p>
            </div>
            <div className="footerCol" >
                <h3>{props.about}</h3>
                <p>{props.aboutPar}</p>
                <p>{props.streetName}</p>
                <p>{props.city}</p>
                <p>{props.phone}</p>
            </div>
            <div className="footerCol" >
                <h3>{props.about}</h3>
                <p>{props.aboutPar}</p>
                <p>{props.streetName}</p>
                <p>{props.city}</p>
                <p>{props.phone}</p>
            </div>
            <div className="footerCol" >
                <h3>{props.about}</h3>
                <p>{props.aboutPar}</p>
                <p>{props.streetName}</p>
                <p>{props.city}</p>
                <p>{props.phone}</p>
            </div>
        </div>
    )
}

export default Footer;
