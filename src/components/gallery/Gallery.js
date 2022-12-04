import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Main from './data';
import pic from './pic.jpeg';
import pic2 from './pic2.jpeg';
import './Gallery.css';
import { getRoles } from "@testing-library/react";
import { useLocation, useParams } from "react-router-dom";
const Gallery = (props) => {
  const [modal, setModal] = useState(false);
  const [imag, setImag] = useState("");
  let check = false ;
  let arr =
    [{ 'image': pic, 'type': 'R' }, { 'image': pic2, 'type': 'M' }, { 'image': pic, 'type': 'R' }, { 'image': pic2, 'type': 'M' }, { 'image': pic, 'type': 'R' }, { 'image': pic2, 'type': 'M' }, { 'image': pic, 'type': 'R' }, { 'image': pic2, 'type': 'M' }];
  const [a, setProdFilter] = useState(arr);
  
 
  const location = useLocation();

  
  const handleClick = (event, key) => {
    setModal(!modal);
    if (typeof (key) != 'undefined') {
      setImag(event.target.src);
    } else {
      setImag("");
    }

  };
  if(location.state != null && (check == false)){
    check = true;
     
  }
  const productFilter = ( filter) => {console.log(filter);

    setProdFilter(arr);
    let b = [];
    arr.map((obj, i) => {
      if (obj['type'] == filter) {
        b.push(obj);
      }
    });
    console.log(b);
    if (filter == 'A') {
      setProdFilter(arr);
    } else {
      setProdFilter(b);
    }

    
  }
 


  useEffect(()=>{console.log(check);
    if(check){
      console.log("come2");
      productFilter(location.state.filter);

    }
      },[]);
  
  return (
    <div className="Gallery">
      <Navbar />
      {modal ? (
        <div className="modal-img" onClick={handleClick}>
          <i className="fa fa-remove" onClick={handleClick}></i>
          <img src={imag} />
        </div>) : ""
      }
      <div className="buttons">
        <div className="allProducts" onMouseEnter={event => productFilter( 'A')} >All Products</div>
        <div className="raw" onMouseEnter={event => productFilter( 'R')} >Raw</div>
        <div className="manufactured" onMouseEnter={event => productFilter( 'M')} >Manufactured</div>

      </div>
      {/* <img src={pic}></img> */}
      <div className="images">
        {a.map((img, i) => {
          return <img src={img['image']} key={i} className="image" onClick={event => handleClick(event, i)} />
        }
        )}


      </div>




    </div>
  );
}

export default Gallery;