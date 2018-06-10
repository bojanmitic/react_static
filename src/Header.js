import React from 'react';
import Blue from './Blue'
import './App.css';


const Header = ()=>{
    return (
        <div className = 'header'>
            <img className="imgHeader" src = "/Header-img.png"   alt="computers"/>
            <div className = "headerTextHeader">
                <div className = 'flex'><h1><i>POWERFULLY SIMPLE</i> <span className = 'thinLetters'>WITH A</span></h1></div>
                <div className = 'flex'><h1><i>SQUEEKY CLEAN </i><span className = 'thinLetters'>DESIGN</span></h1></div>
                <p id="headerPar">Find out how you can offer powerfull solution to your customers now</p>
                <button className='btn-blue'>LEARN MORE</button>
            </div>
            <Blue 
              text={'CREATE A POWERFULL SOLUTION NOW!'}
              textInButton={'GET STARTED'}
          />
        </div>
    )
}

export default Header;