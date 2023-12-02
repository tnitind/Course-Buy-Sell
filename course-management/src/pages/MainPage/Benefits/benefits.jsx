import React from "react";
import "./benefits.css";
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

const Benefits = () => {
  defineElement(lottie.loadAnimation);

  return (
    <React.Fragment>
      <h1 className="benefitHeading">
        Benefits Of&nbsp;<span> Choosing Us</span>  
      </h1>
      
      <div className="mainGrid">
        <div className="benefit">
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
        <lord-icon
            src="https://cdn.lordicon.com/zzcjjxew.json"
            trigger="loop"
            stroke="100"
            colors="primary:#6415ff,secondary:#6415ff"
            state="loop-spin"
            style={{width:'80px', height:'80px'}}>
        </lord-icon>
          <h2>Convenience</h2>
          <p>Access courses anytime, anywhere, and learn at your own pace.</p>
        </div>

        <div className="benefit">
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
          <lord-icon
              src="https://cdn.lordicon.com/iltqorsz.json"
              trigger="loop"
              colors="primary:#6415ff,secondary:#6415ff"
              stroke="100"
              state="hover-1"
              style={{width:'80px', height:'80px'}}>
          </lord-icon>
          <h2>Wide Selection</h2>
          <p>
            Choose from a diverse range of courses tailored to your interests
            and needs
          </p>
        </div>

        <div className="benefit">
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
        <lord-icon
            src="https://cdn.lordicon.com/eszyyflr.json"
            trigger="loop"
            stroke="100"
            colors="primary:#6415ff,secondary:#6415ff"
            style={{width:'80px', height:'80px'}}>
        </lord-icon>
          <h2>Expert Instructors</h2>
          <p>
            Learn from industry experts and professionals in their respective
            fields.
          </p>
        </div>

        <div className="benefit">
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
        <lord-icon
            src="https://cdn.lordicon.com/soseozvi.json"
            trigger="loop"
            colors="primary:#6415ff,secondary:#6415ff"
            stroke="60"
            delay="500"
            style={{width:'80px', height:'80px'}}>
        </lord-icon>
          <h2>Interactive Learning</h2>
          <p>
            Engage with multimedia content, quizzes, and assignments for an
            immersive experience.
          </p>
        </div>

        <div className="benefit">
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
          <lord-icon
              src="https://cdn.lordicon.com/yeallgsa.json"
              trigger="loop"
              delay="500"
              colors="primary:#6415ff,secondary:#6415ff"
              stroke="70"
              style={{width:'80px', height:'80px'}}>
          </lord-icon>
          <h2>Cost-Effective</h2>
          <p>
            Save money on travel and traditional classroom expenses with
            affordable online courses.
          </p>
        </div>

        <div className="benefit">
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
          <lord-icon
              src="https://cdn.lordicon.com/nxaaasqe.json"
              trigger="loop"
              stroke="70"
              colors="primary:#6415ff,secondary:#6415ff"
              style={{width:'80px', height:'80px'}}>
          </lord-icon>
          <h2>Lifetime Access</h2>
          <p>
            Enjoy unlimited access to course materials and updates, ensuring
            continuous learning.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Benefits;
