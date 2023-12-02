import React, { useState } from "react";
import "./SellerDashboard.css";
import CreateCourse from "../CreateCourse/CreateCourse";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import Draft from "../../Seller/Draft/Draft";
import ActiveCourses from "../ActiveCourses/ActiveCourses";

const SellerDashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [showCreateCourse, setShowCreateCourse] = useState(false);
  const [showDraft, setShowDraft] = useState(false);
  const [showCourses, setShowCourses] = useState(true);
  // course State

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleCreateCourseClick = () => {
    setShowCreateCourse(true);
    setShowCourses(false);
    setShowDraft(false);
  };
  const handleAllcoursesClick = () => {
    setShowCourses(true);
    setShowCreateCourse(false);
    setShowDraft(false);
  };
  const handleDraftClick = () => {
    setShowCourses(false);
    setShowCreateCourse(false);
    setShowDraft(true);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="seller-dashboard">
        <div className={`sidebar ${sidebarVisible ? "active" : ""}`}>
          <div
            className={`sidebar-heading${showCourses ? "-hover" : ""}`}
            onClick={handleAllcoursesClick}
          >
            Courses
          </div>
          <div
            className={`sidebar-heading${showCreateCourse ? "-hover" : ""}`}
            onClick={handleCreateCourseClick}
          >
            Create Course
          </div>
          <div
            className={`sidebar-heading${showDraft ? "-hover" : ""}`}
            onClick={handleDraftClick}
          >
            Draft
          </div>
        </div>
        <div className={`content ${sidebarVisible ? "shifted" : ""}`}>
          <button className="toggle-button" onClick={toggleSidebar}>
            {` ${sidebarVisible ? "X" : "||"}`}
          </button>

          {showCreateCourse && <CreateCourse />}
          {showDraft && <Draft />}
          {showCourses && <ActiveCourses />}
          {/* Your main dashboard content goes here */}
          {/* Map function */}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default SellerDashboard;
