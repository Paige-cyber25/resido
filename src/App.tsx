import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { WhatsApp } from 'react-whatsapp-component';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/shared/Footer/Footer';
import ResidoNavbar from './components/shared/Navbar/Navbar';
// import Navbar from './components/shared/Navbar/Navbar';

const AboutUs = lazy(()=> import('../src/pages/About/About'));
const OurServices = lazy(()=> import('../src/pages/OurService/OurService'));
const ContactUs = lazy(()=> import('../src/pages/Contact/Contact'));
const GetStarted = lazy(()=> import('../src/pages/GetStarted/GetStarted'));



function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading.....</div>}>
    <div className="app">
    <ResidoNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/about' element ={<AboutUs />} />
        <Route path='/service' element ={<OurServices />} />
        <Route path='/contact' element ={<ContactUs />} />
        <Route path='/pricing' element ={<GetStarted />} />
      </Routes>
      <Footer />
      <a href=' ' target='_blank'>
      <WhatsApp phone="2349043284663" text="welcome to resido" />
      </a>
    </div>
    </Suspense>
    </Router>
  );
}

export default App;
