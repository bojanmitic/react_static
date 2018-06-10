import React from 'react';
import './App.css';
import MiddleSmall from './MiddleSmall';


const MiddleContainer = () =>{
    return (
        <div className = "MiddleContainer">
            <MiddleSmall 
                        
                        header = "SUPERBLY RESPONSIVE"
                        paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "}
                        icon = {"mobile"}
            />
            <MiddleSmall 
                        
                        header = "SUPERBLY RESPONSIVE"
                        paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "}
                        icon = {"desktop"}
            />
            <MiddleSmall 
                        
                        header = "SUPERBLY RESPONSIVE"
                        paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "}
                        icon = {"laptop"}
            />
            <MiddleSmall 
                        
                        header = "SUPERBLY RESPONSIVE"
                        paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "}
                        icon = {"recycle"}
            />
        </div>
    )
}

export default MiddleContainer;