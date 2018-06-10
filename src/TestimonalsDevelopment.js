import React from 'react';
import './App.css';
import SmallWhitePar from './SmallWhitePar';
import DesignProduction from './DesignProduction';
import Blue from './Blue';

const TestimonalsDEvelopment = ()=>{
    return(
        <div className="testimonalsDevelopment">
        <div className="leftParagraphs">
            <SmallWhitePar title = {'Jonh Smith'} 
                paragraph={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s'}
            />
            <SmallWhitePar title = {'Jonh Smith'} 
                paragraph={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s'}
            />
            <SmallWhitePar title = {'Jonh Smith'} 
                paragraph={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s'}
            />
            <SmallWhitePar title = {'Jonh Smith'} 
                paragraph={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s'}
            />
            </div>
            <DesignProduction />
            <Blue   text = 'GET IN TOUCH WITH US NOW!'
                    textInButton="CONTACT US"
            />
        </div>
    )
}

export default TestimonalsDEvelopment; 