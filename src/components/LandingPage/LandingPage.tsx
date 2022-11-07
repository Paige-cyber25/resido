import React from 'react';
import Action from '../shared/Action/Action';
import Banner from '../Banner/Banner';
import MainContent from '../MainContent/MainContent';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const LandingPage = () => {
  return (
    <div>
     
        <Banner />
        <MainContent />
        <Action />
      
    </div>
  )
}

export default LandingPage