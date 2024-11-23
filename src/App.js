import React from 'react';
// import { Routes,Route, BrowserRouter } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Carousel from './components/main/carousel/Carousel.js';
import Footer from './components/footer/Footer.js';
import MainDetails from './components/main/allDetails/MainDetails.js';


export default function App() {
  let Location = useLocation();

  return <>
  
      <Navbar/>
      {Location.pathname == '/' && <Carousel/>}
      {/* <Carousel/> */}
      {Location.pathname == '/' && <MainDetails/>}
      {/* <MainDetails/> */}
      <Footer/>
  
    {/* <Routes>
      <Route path='carousel' element={<Carousel/>}/>
      <Route path='maindetails' element={<MainDetails/>}/>
    </Routes> */}
    
  </>

}

