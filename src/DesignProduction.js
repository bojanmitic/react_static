import React from 'react';
import './App.css';

const DesignProduction = (props) => {
    return (
        <div className = "designProduction">
        <div className="desProdDiv">
            <div id="leftBtn" className="designProdBtn">DESIGN</div>
            <div className="designProdBtn">PRODUCTION </div>
        </div>
            <div  className="designParagraph">
                <h4>The Design</h4>
                <p className="designParagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>   
            </div>
            <button className="btn-blue">READ MORE</button>
      </div>
    )
}

export default DesignProduction;