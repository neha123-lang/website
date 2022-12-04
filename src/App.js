import React  from "react";
import Gallery from "./components/gallery/Gallery";
// import { Navbar } from "react-bootstrap";
// import Best from "./components/best/Best";
// import Featured from "./components/feature/Featured";
// import Footer from "./components/footer/Footer";
// import Hero from "./components/hero/Hero";
import  Navbar from "./components/navbar/Navbar";
import MainPage from "./mainPage/MainPage";
import {Route,Routes}from 'react-router-dom';
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
function App() {
  return (
   <Routes>
     <Route path="/" element={<MainPage />}></Route>
     <Route exact path = "/gallery" element = {<Gallery />}></Route> 
     <Route exact path = "/contact" element = {< Contact/>}></Route> 
     <Route exact path = "/about" element = {<About />}></Route> 
   </Routes>
  );
}

export default App;
