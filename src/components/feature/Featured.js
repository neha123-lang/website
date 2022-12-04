import React from "react";
import './Featured.css';
import pic from '../../assets/pic.jpeg';
import pic2 from '../../assets/pic2.jpeg';
const Featured = () => {
  return (
    <div className="featured">
      <h1 className="featured-text"> Best Selling Items </h1>
      <br></br>
      <div className="container">

        <img className="span-3 image-grid-row-2" src={pic} alt='' />
        <img src={pic} alt='' />
        <img src={pic} alt='' />
        <img src={pic} alt='' />
        <img src={pic} alt='' />
        <img src={pic} alt='' />
        <img src={pic} alt='' />
        <img src={pic} alt='' />

        {/* <div className="span-3 img-details">
          <div className="top">
            <h2>123 acsfregr rgr grtg ,TX</h2>
            <p>House for sale</p>
            <p className="price">$123</p>
          </div>
          <div className="info-grid">
            <div className="info">
              <p className="bold" >bedRooms : </p><p>5</p>
            </div>
            <div className="info">
              <p className="bold" >bathrooms :</p><p>2</p>
            </div>
            <div className="info">
              <p className="bold" >Square Feet : </p><p>50yrd</p>
            </div>
            <div className="info">
              <p className="bold" >Est Payment :</p><p>20</p>
            </div>
          </div>
        </div> */}
        {/*<div className="span-2 right-img-details">
          <p>gjtr gjtri jgltirojkit jglrjeglkj jgtro;ij gtjrg;ijtr jgtrigjo </p>
          {/* <button className="btn">view Listing</button> 
        </div>*/}
      </div>
{/**Section section */} 
<div className="container">

        <img className="order-2" src={pic2} alt='' />
        <img className="order-3"src={pic2} alt='' />
        <img className="order-4"src={pic2} alt='' />


        <img className="span-3 image-grid-row-2 order-1" src={pic2} alt='' />


        <img className="order-5" src={pic2} alt='' />
        <img className="order-6" src={pic2} alt='' />
        <img className="order-7" src={pic2} alt='' />
        <img className="order-8" src={pic2} alt='' />

        <div className="span-2 right-img-details order-9">
          
          {/* <button className="btn">view Listing</button> */}
        </div>
        {/* <div className="span-3 img-details order-10">
          <div className="top">
            <h2>123 acsfregr rgr grtg ,TX</h2>
            <p>House for sale</p>
            <p className="price">$123</p>
          </div>
          <div className="info-grid">
            <div className="info">
              <p className="bold" >bedRooms : </p><p>5</p>
            </div>
            <div className="info">
              <p className="bold" >bathrooms :</p><p>2</p>
            </div>
            <div className="info">
              <p className="bold" >Square Feet : </p><p>50yrd</p>
            </div>
            <div className="info">
              <p className="bold" >Est Payment :</p><p>20</p>
            </div>
          </div>
        </div> */}
       
      </div>
    </div>
  );
}

export default Featured;