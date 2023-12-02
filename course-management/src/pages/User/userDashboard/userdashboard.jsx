import React, { useEffect, useState } from "react";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import { useAuth } from "../../../authentication/AuthContext";
import "./userdashboard.css";

function Userdashboard() {
  const [userDataArray, setUserDataArray] = useState([]);
  const { user } = useAuth();


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_API + "/user/ordereditems",
          {
            method: "POST",
            body: JSON.stringify({ courseId: user.OrderedArray }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 401) {
          throw new Error("Unauthorized");
        }

        if (response.ok) {
          const data = await response.json();
          setUserDataArray(data.coursesData);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle the error and show a user-friendly message if needed.
      }
    };

    fetchUserData();
  }, [user.OrderedArray]);


  return (<>
      <Header />
        <h1 className="login-heading">
          Ordered&nbsp;<span>Items</span>
        </h1>
        <div className="container">
          {userDataArray.map((userdata, index) => (
            <div className="divtable" key={index}>
              <img src={userdata.imageLink} alt="graphic" className="pic1" />
              <div className="logoname">
                <h3 className="author">Offline</h3>
                <div className="price">${userdata.price}</div>
              </div>
              <div className="tname">{userdata.title}</div>

              <div className="description">
                Last visited: 3 days ago
                <br />
                Chapter Completed: 4/20
                <br />
                Leave a rating{" "}
                <sapn className="rating">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </sapn>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${20}%` }}></div>
              </div>
              <div className="buttons">
                <button className="pricebutton">Resume Learning</button>
              </div>
            </div>
          ))}
        </div>
      <Footer />
    </>
  );
}

export default Userdashboard;
