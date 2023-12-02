import React, { useEffect, useState } from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import { useNavigate } from "react-router";
import "./Courses.css";

function Courses() {
  const [courseDataArray, setCourseDataArray] = useState([]);
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handelShowBigDiv = (courseData) => {
    console.log(courseData._id);
    navigate(`/courseview/${courseData._id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");

      try {
        const response = await fetch(
          process.env.REACT_APP_API +"/courses/displaycourses",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Courses Response", response);
        const data = await response.json();
        setCourseDataArray(data.data);

        console.log("Courses Response", data);

        if (response.status === 404) {
          alert("Did not found any courses.");
        }

        if (response.ok) {
          console.log("Response OK");
        } else {
          console.log("Login failed");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error gracefully, e.g., show an error message to the user
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <h1 className="login-heading">
        Variety of<span>&nbsp;Courses</span>
      </h1>
      <div className="container">
        {courseDataArray.map((courseData, index) => (
          <div
            className="divtable"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={index}
          >
            <img src={courseData.imageLink} alt="graphic" className="pic1" />
            <div className="logoname">
              <h3 className="author">
                Live <span className="dot">&#8226;</span>
              </h3>
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
                <button
                  className="popupbutton"
                  onClick={(e) => {
                    handelShowBigDiv(courseData);
                  }}
                >
                  Read More
                </button>
              </div>
            )}
            <div className="description">{courseData.whatYoullLearn}</div>
          </div>
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Courses;
