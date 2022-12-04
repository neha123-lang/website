import React,{useState,useEffect} from "react";
import Navbar from "../navbar/Navbar";
import email from './email.png';
import './Contact.css';

const Contact = () => {
  const parms= {"neha" : '3',"fhrkuew" :'fdsaf'};
  // const [page, setPage] = useState(1);
  // const [commitHistory, setCommitHistory] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const loadMoreCommit = () => {
  //   setPage(page + 1);
  // };
  // useEffect(() => {
  //   fetch(
  //     `http://localhost/crud/index.php/elect`,
  //     {
  //       method: "POST",
  //       headers: new Headers({
  //         // Accept: "application/vnd.github.cloak-preview"
  //       })
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(response => {
  //       setCommitHistory(response.items);
  //       setIsLoading(false);
  //     })
  //     .catch(error => console.log(error));
  // }, [page]);
const loadMoreCommit=()=>{
  // fetch("http://localhost/testingAPi/api/index.php/mainModule/mainModule.class.php/elect",
  // https://ecommerce-api-project.000webhostapp.com/
  // fetch("http://ecommerce-api-project.000webhostapp.com/mainModule/mainModule.class.php/elect",
  // https://cors-anywhere.herokuapp.com/https://www.api.com
  fetch("https://ecommerce-api-project.000webhostapp.com/mainModule/mainModule.class.php/elect",
  {
    method: "POST",
    body: JSON.stringify({parms}),
    headers: new Headers({
      // Accept: "application/vnd.github.cloak-preview"
    })
  })
  .then(response => {
    return response.json()
  })
  .then(parms => {
   console.log(parms);
  })

}
 
  return (
    <div>
      <Navbar />
      <div className="contact">
        <div className="header">
          <h2>HAVE SOME QUESTIONS?</h2>
          <h4>Mail Us...</h4>
        </div>
        <div className="middle">
          <img src={email} />
          <div className="rightSide">
            <div className="input-field">
<div className="name">

<input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
</div>
              
              <input type="email" placeholder="Email" />
             <textarea cols="50"placeholder="Comments" ></textarea>
            </div>
            <button  onClick={loadMoreCommit}>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
