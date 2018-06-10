import React, { Component } from 'react';
import Header from './Header';
import MiddleContainer from './MiidleContainer';
import MiddleWithImgContainer from './MiddleWithImgContainer';
import TestimonalsDEvelopment from './TestimonalsDevelopment';
import Footer from './Footer';
import footerData from './FooterData';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Header />
        <MiddleContainer />
        <MiddleWithImgContainer />
        <TestimonalsDEvelopment />
        <Footer about = {footerData.about}
                aboutPar = {footerData.aboutPar}
                streetName={footerData.streetName}
                phone = {footerData.phone}
        />
      </div>
    );
  }
}

export default App;