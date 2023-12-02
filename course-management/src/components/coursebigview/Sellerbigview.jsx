import React, {  useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";

const SellerBigview = () => {
  const [courseData, setCourseData] = useState({
    whatYoullLearn : []
});

const { id } = useParams();

  useEffect(() => {

    const fetchcourse = async ()=>{

      try {
        console.log("entered fetch course");
        const resp = await fetch(process.env.REACT_APP_API+'/user/viewcourse', {
          method: "POST",
          body: JSON.stringify({id}),
          headers: {
            "Content-Type": "application/json",
          },
        });
      
        if (resp.ok) {
          console.log("Course Found");
          const data = await resp.json();
          console.log("course data", data.data);
          setCourseTitle(data.data.title);
          setCourseDescription(data.data.description);
          setCourseCategory(data.data.category);
          setCourseLanguage(data.data.language);
          setCourseLevel(data.data.level);
          setCourseDuration(data.data.duration);
          setCourseImage(data.data.imageLink);
          setCoursePrice(data.data.price);
          setStatus(true);
          setPrerequisites(data.data.prerequisites);
          setInputValues(data.data.whatYoullLearn);
          setCourseData(data.data);
        }
      
        if (resp.status === 404) {
          alert("Course not found");
        }
      
      } catch (error) {
        console.log("error in Sellerbigview", error);
      }
    }

    fetchcourse();
  }, [id]);


  const [courseTitle, setCourseTitle] = useState(courseData.title);
  const [courseDescription, setCourseDescription] = useState(courseData.description);
  const [courseCategory, setCourseCategory] = useState(courseData.category);
  const [courseLanguage, setCourseLanguage] = useState(courseData.language);
  const [courseLevel, setCourseLevel] = useState(courseData.level);
  const [courseDuration, setCourseDuration] = useState(courseData.duration);
  const [courseImage, setCourseImage] = useState(courseData.imageLink);
  const [coursePrice, setCoursePrice] = useState(courseData.price);
  const [status, setStatus] = useState(true);
  const [prerequisites, setPrerequisites] = useState(courseData.prerequisites);
  const [inputValues, setInputValues] = useState([...courseData.whatYoullLearn]);

  const imageOptions = [
    "https://i.postimg.cc/K3f93kVt/image1.jpg",
    "https://i.postimg.cc/xNfwZ2Vy/image2.jpg",
    "https://i.postimg.cc/kD7PGxR6/image3.jpg",
    "https://i.postimg.cc/9zBVYxHY/image4.jpg",
    "https://i.postimg.cc/DSSTFnJx/image5.jpg",
    "https://i.postimg.cc/4YjTxqps/image6.jpg",
    "https://i.postimg.cc/mt24XQbf/image7.jpg",
    "https://i.postimg.cc/4mLgrmdK/image8.jpg",
    "https://i.postimg.cc/62XJdZHP/image9.jpg",
    "https://i.postimg.cc/r0N6gp3w/image10.jpg",
    "https://i.postimg.cc/LqfFYDVf/image11.jpg",
  ];

  const handleInputChange = (index, value) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
  };

  const handleAddInput = () => {
    setInputValues([...inputValues, ""]); // Add a new input field
  };

  const handleRemoveInput = (index) => {
    const updatedValues = [...inputValues];
    updatedValues.splice(index, 1); // Remove input field at the given index
    setInputValues(updatedValues);
  };

  const handleDraft = (e) => {
    setStatus(!status);
    handleSubmit(e);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    if (
      courseTitle === "" ||
      courseDescription === "" ||
      courseCategory === "" ||
      courseLanguage === "" ||
      courseLevel === "" ||
      courseDuration === "" ||
      courseImage === "" ||
      coursePrice === "" ||
      status === "" ||
      prerequisites === "" ||
      JSON.stringify(inputValues) === JSON.stringify([""])
    ) {
      alert("Necessary fields are marked");
    } else {
      try {
        const response = await fetch(
          process.env.REACT_APP_API + "/seller/update-course",
          {
            method: "PUT",
            body: JSON.stringify({
                CourseTitle:courseTitle ,
                CourseDescription:courseDescription,
                CourseCategory:courseCategory,
                CourseLanguage:courseLanguage,
                CourseLevel:courseLevel,
                CourseDuration:courseDuration,
                CoursePrice:coursePrice,
                CourseImage:courseImage,
                Status:status,
                Prerequisites:prerequisites,
                inputValues,
                Cid:id
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("response", response);

        if (response.status === 400) {
          alert("Data missing");
        }
        if (response.status === 404) {
          alert("Course Not found");
        }

        if (response.ok) {
          alert("Updation successful");
        } else {
          alert("Updation failed");
        }
      } catch (error) {
        alert("Error in creating course", error);
      }
    }
  };

  return (<React.Fragment>
    <Header/>
    <div className="mainSellerContainer">
      <h1 class="benefitHeading">
        Update&nbsp;<span> Course</span>
      </h1>
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
              placeholder="Ex. Best SEO practices"
            />
            <label>
              <span>*</span>Course Category:
            </label>
            <input
              type="text"
              value={courseCategory}
              onChange={(e) => setCourseCategory(e.target.value)}
              placeholder="Ex. Computer, Electronics, Science"
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
              placeholder="Ex. English, Arabic, American english"
            />
            <label>
              <span>*</span>Course Level:
            </label>
            <input
              type="text"
              value={courseLevel}
              onChange={(e) => setCourseLevel(e.target.value)}
              placeholder="Ex. Easy, Intermediate, Advance"
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
              placeholder="Ex. 110 minutes"
            />

            <label>
              <span>*</span>Course Price:
            </label>
            <input
              type="text"
              value={coursePrice}
              onChange={(e) => setCoursePrice(e.target.value)}
              placeholder="Ex. 1299/-"
            />
          </div>

          <div>
            <label className="image-desc">
              <span>*</span>Course Image/Thumbnail:
            </label>

            <select
              value={courseImage}
              onChange={(e) => {
                setCourseImage(e.target.value);
              }}
            >
              <option>{courseImage}</option>
              {imageOptions.map((imageUrl, index) => (
                <option key={index} value={imageUrl} > 
                  {imageUrl}
                </option>
              ))}
            </select>

            {courseImage && (
              <div>
                <h3>Selected Image:</h3>
                <img src={courseImage} alt="Selected Course" width="200" />
              </div>
            )}
          </div>

          <label className="image-desc">
            <span>*</span>Course Description:
          </label>
          <textarea
            className="textarea"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
          <label className="image-desc">
            <span>*</span>What You'll Learn:
          </label>
          <div>
            {inputValues.map((values, index) => (
              <div className="input-learn">
                <input
                  type="text"
                  value={values}
                  onChange={(e) => {
                    handleInputChange(index, e.target.value);
                  }}
                />
                <span
                  className="plusbutton"
                  onClick={() => handleRemoveInput(index)}
                >
                  -
                </span>
              </div>
            ))}{" "}
            <span className="plusbutton" onClick={handleAddInput}>
              +
            </span>{" "}
          </div>
          <label className="image-desc">
            <span>*</span>Course Prerequisits
          </label>
          <textarea
            className="textarea"
            value={prerequisites}
            onChange={(e) => setPrerequisites(e.target.value)}
            placeholder="Ex. HTML, CSS"
          />
        </div>
        <div className="two-buttons">
          <button
            class="button-66"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Save Changes
          </button>
          <button
            type="submit"
            class="button-66"
            
            onClick={(e) => {
              handleDraft(e);
            }}
          >{
          status? "Make Draft" : "Make Publish"
            }

          </button>
        </div>
      </form>
    </div>
    <Footer/>
    </React.Fragment>
  );

};

export default SellerBigview;
