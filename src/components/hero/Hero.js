import React  from "react";
import  {AiOutlineSearch}from 'react-icons/ai';
import {Link} from "react-router-dom";
import './hero.css';
const Hero =() =>{
  return (
    <div className="hero">
<div className="content">
    <h1>Buy The Good Quality Material </h1>
    <p className="search-text" >Search the products and get the deal done.</p>
    {/* <form className="search">
        <div>
            <input type = 'text' placeholder="Enter Keyboard"/>
        </div>
        <div className="radio">
        <input type='radio'  checked/>
        <label>Buy</label>
        <input type = 'radio'/>
        <label>Rent</label>
        <button type ="submit"><AiOutlineSearch className="icon" /></button>
        </div>
    </form> */}

<p>Products available here </p>
<ul>
  <li ><Link to="/gallery" state={{filter :"M"}} className="gallery-Link">STEEL ITEMS </Link></li>
  <li ><Link to="/gallery" state={{filter :"R"}} className="gallery-Link">IRON ITEMS</Link></li>
</ul>
</div>
    </div>
  );
}

export default Hero;
