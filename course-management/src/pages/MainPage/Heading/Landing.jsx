import React from "react";
import './Landing.css';
import video1 from '../../../assets/coursev1.mp4';


import { useNavigate } from "react-router";

function Landing() {


  const Navigate = useNavigate();



  return (
    <React.Fragment>
    <div className="containerx">
      <div className="head-segment">
        <p>
          'Education is the most powerful weapon which you can use to change the world<br/> - Nelson Mandela'
        </p>
        <h1>
          Unlock Your Potential with <br /> <span>High-Quality Courses</span>
        </h1>
        <button className="button-66" onClick={()=>{Navigate('/courses')}}>Get Started</button>
      </div>
      <div className="img-segment">
        <video src={video1} autoPlay loop muted className="videofront"></video> 
      </div>
    </div>
  </React.Fragment>
  );
}

export default Landing;
