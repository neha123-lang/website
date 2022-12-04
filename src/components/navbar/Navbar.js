import React,{useState}  from "react";
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {BsFillHouseFill} from 'react-icons/bs';
import './navbar.css';
import { BrowserRouter as Router ,Link,Route ,Switch} from "react-router-dom";
import MainPage from "../../mainPage/MainPage";
import About from "../about/About";
const Navbar = () => {
  const[click,setClick]= useState(0);
  const handleClick =(num)=>{
    console.log("hi");
    setClick(num);
    console.log(click);

    // console.log(click);
  }
  return (
    <div className="navbar">
      <div className="container">
          <h1><Link to ="/"><span><BsFillHouseFill />Lalson</span> EnterPrises</Link></h1>
          
          <ul className='nav-menu'>
              <li><Link to="/" onClick={()=>handleClick(1)}className={click==1?'active':''}>Home</Link></li>
              <li><Link to="/gallery" onClick={()=>handleClick(2)}className={click==2?'active':''}>Gallery</Link></li>
              <li><a href ="/about" >About</a></li>
              <li><Link to ="/contact">Contact</Link></li>
              </ul>
          <div className="hamburger" onClick={handleClick}>
            {click?(<FaRegTimesCircle className="icon" />):(<HiOutlineMenuAlt4 className="icon"/>)}
            
          </div>
      </div>
    </div>
  );
}

export default Navbar;