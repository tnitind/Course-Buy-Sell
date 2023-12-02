import React, { useState } from "react";
import "./coursedisplay.css";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";

function Coursedisplay({ title, description, price, imageLink, createdBy }) {
  const [showPopup, setShowPopup] = useState(false);
  const [userdata] = useState({
    title: "3D Designing",
    description:
      "This is the description of 3D created course This is the description of 3D created cours This is the description of 3D created cours This is the description of 3D created cours",
    price: 44,
    imageLink:
      "https://frameboxxindore.in/wp-content/uploads/2021/10/4-325x260.jpg",
    published: true,
    createdBy: "64c27954e0156f8f9133f270",
  });

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowPopup(false);
    }, 300);
  };

  return (
    <React.Fragment>
      <Header />
      <h1 className="benefitHeading">
        Wide Variety&nbsp;<span>of Courses</span>
      </h1>
      <div
        className="divtable"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={userdata.imageLink} alt="graphic" className="pic1" />
        <div className="logoname">
          <h3 className="author">{userdata.createdBy}</h3>
          <div className="price">${userdata.price}</div>
        </div>
        <div className="tname">{userdata.title}</div>
        {showPopup && (
          <div className="popup">
            <p className="popuptitle">{userdata.title}</p>{" "}
            <p className="popupdesc">{userdata.description}</p>
            <button className="popupbutton">Read More</button>
          </div>
        )}
        <div className="description">
          {userdata.description.length > 50
            ? userdata.description.substr(0, 90) + "..."
            : userdata.description}
        </div>

        <div className="buttons">
          <button className="pricebutton">Buy Now</button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Coursedisplay;
