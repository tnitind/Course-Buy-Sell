import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../../authentication/AuthContext";


function ActiveCourses() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const {user} = useAuth();
  const [userDataArray, serUserDataArray] = useState([]);

  useEffect(  () => {

    const fetchCourses = async ()=>{
      console.log("entered fetch in active course")
      try {
        const response = await fetch(
          process.env.REACT_APP_API + "/seller/seller-dashboard",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ courseId: user.userID}),
          }
        );
  
        if (response.status === 400) {
          alert("No seller found");
          return navigate("/sellerlogin", { replace: true });
        }
  
        if (response.ok) {
          const responseData = await response.json(); // Await and store the response data
          serUserDataArray(responseData);
          console.log("response of active courses", responseData); // Log the response data
          
        } else {
          console.log("Active course failed");
        }
      } catch (error) {
        console.log("Error in Seller Register", error);
      }
    }
  fetchCourses();
  }, [navigate, user.userID]);
  

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handelShowBigDiv = (coursedata) => {
    console.log("course id ",coursedata._id);
    navigate(`/showcourse/${coursedata._id}`);
  };

  return (
    <React.Fragment>
      <h1 className="login-heading">
        Live&nbsp;<span>Courses</span>
      </h1>
      <div className="container">
        {userDataArray.map((courseData, index) => (
          <div
            className="divtable"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={index}
          >
            <img src={courseData.imageLink} alt="graphic" className="pic1" />
            <div className="logoname">
              <h3 className="author">LIVE</h3>
              <div className="price">${courseData.price}</div>
            </div>
            <div className="tname">{courseData.title}</div>
            {hoveredIndex === index && (
              <div className="popup">
                <p className="popuptitle">{courseData.title}</p>{" "}
                <p>
                  {courseData.duration} minutes | {courseData.level} Level
                </p>
                <p>
                  {courseData.language} Subtitles | {courseData.category}
                </p>
                <p className="popupdesc">
                  <p className="popuptitle"></p>
                  {courseData.whatYoullLearn.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </p>
                <div className="two-buttons">
                <button
                  className="popupbutton"
                  onClick={(e) => {
                    handelShowBigDiv(courseData);
                  }}
                >
                  Update
                </button>
                <button
                  className="deletebutton"
                >
                  Delete
                </button>
                </div>
              </div>
            )}
            <div className="description">{courseData.whatYoullLearn}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ActiveCourses;
