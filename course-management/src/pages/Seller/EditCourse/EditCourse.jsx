import React, { useState } from "react";
import "./CreateCourse.css";

const EditCourse = (props) => {
    const{courseData} = props;
  const [courseTitle, setCourseTitle] = useState(courseData.courseTitle);
  const [courseDescription, setCourseDescription] = useState(courseData.courseDescription);
  const [courseCategory, setCourseCategory] = useState(courseData.courseCategory);
  const [courseLanguage, setCourseLanguage] = useState(courseData.courseLanguage);
  const [courseLevel, setCourseLevel] = useState(courseData.courseLevel);
  const [courseDuration, setCourseDuration] = useState(courseData.courseDuration);
  const [courseImage, setCourseImage] = useState(courseData.courseImage);
  const [coursePrice, setCoursePrice] = useState(courseData.coursePrice);

  const handleSubmit = (e) => {
    e.preventDefault();
    // implement the logic to create the course with the form data here

    console.log("Form submitted!");
    if (
      courseTitle === "" ||
      courseDescription === "" ||
      courseCategory === "" ||
      courseLanguage === "" ||
      courseLevel === "" ||
      courseDuration === "" ||
      courseImage === "" ||
      coursePrice
    ) {
      alert("Necessary fields are marked");
    } else {
      // fetch data to BE
    }
  }

    return (
      <div className="mainSellerContainer">
        <h1 class="benefitHeading">Create&nbsp;<span> Course</span></h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="two-divs">
          <label>
              <span>*</span>Course Title:
            </label>
            <input
              type="text"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
            />
            <label>
              <span>*</span>Course Category:
            </label>
            <input
              type="text"
              value={courseCategory}
              onChange={(e) => setCourseCategory(e.target.value)}
            />
          </div>

          <div className="two-divs">
            <label>
              <span>*</span>Course Language:
            </label>
            <input
              type="text"
              value={courseLanguage}
              onChange={(e) => setCourseLanguage(e.target.value)}
            />
            <label>
              <span>*</span>Course Level:
            </label>
            <input
              type="text"
              value={courseLevel}
              onChange={(e) => setCourseLevel(e.target.value)}
            />
            </div>

            <div className="two-divs">
            
            <label>
              <span>*</span>Course Duration:
            </label>
            <input
              type="text"
              value={courseDuration}
              onChange={(e) => setCourseDuration(e.target.value)}
            />
                       
            <label>
              <span>*</span>Course Price:
            </label>
            <input
              type="text"
              value={coursePrice}
              onChange={(e) => setCoursePrice(e.target.value)}
            />
            
            </div>
            <label className="image-desc">
              <span>*</span>Course Image/Thumbnail:
            </label>
            <input className="imageLink"
            value={courseImage}
              onChange={(e) => setCourseImage(e.target.courseImage)}
            />
             <label className="image-desc">
              <span>*</span>Course Description:
            </label>
            <textarea
              className="textarea"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
            />
          </div>
          <div className="two-buttons">
          <button class="button-66">Draft</button>
          <button type="submit" class="button-66" >Publish</button>
          </div>
         
        </form>
      </div>
    );
};

export default EditCourse;
