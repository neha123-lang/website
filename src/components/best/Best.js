import React  from "react";
import {Link} from 'react-router-dom';
import './Best.css';
import pic from '../../assets/pic.jpeg';
const Best = ()=> {

  return (
<div className="best">
<h1>Find the Required  Producs</h1>
<div>
    <p>All</p>
    <p>Pipes</p>
    <p>Angles</p>
    <p>Rod</p>
</div>
<div className="container">
<img src={pic} alt='' />
<img src={pic} alt='' />
<img src={pic} alt='' />
</div>
<button className="btn"><Link to ="/gallery">View All</Link></button>
</div>
  );
}

export default Best;
