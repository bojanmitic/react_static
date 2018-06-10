import React from 'react';
import './App.css';
import SmallWhitePar from './SmallWhitePar';

const MiddleWhiteImg = (props) => {
    return (
        <div className = "middleWhiteImg">
            <img className="whiteImg" src="./img-placeholder.png"  alt="placeholder"/>
            <SmallWhitePar   
                        title={"Blog Title"}
                        paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
            />
        </div>
    )
}

export default MiddleWhiteImg;