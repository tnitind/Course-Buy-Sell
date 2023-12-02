const Courses = require("../../Models/Courses");

const UpdateCourse = async (req, res) => {
  try {
    const {
      CourseTitle,
      CourseDescription,
      CourseCategory,
      CourseLanguage,
      CourseLevel,
      CourseDuration,
      CoursePrice,
      CourseImage,
      Status,
      Prerequisites,
      inputValues,
      Cid,
    } = req.body;
    
    console.log(
      "course data in uopdate course",
      CourseTitle,
      CourseDescription,
      CourseCategory,
      CourseLanguage,
      CourseLevel,
      CourseDuration,
      CoursePrice,
      CourseImage,
      Status,
      Prerequisites,
      inputValues,
      Cid
    );
    if (
      CourseTitle === "" ||
      CourseDescription === "" ||
      CourseCategory === "" ||
      CourseLanguage === "" ||
      CourseLevel === "" ||
      CourseDuration === "" ||
      CoursePrice === "" ||
      CourseImage === "" ||
      Status === "" ||
      Prerequisites === "" ||
      inputValues === "" ||
      Cid === ""
    ) {
      return res.status(400).json({ message: "Data missing" });
    }

    const course = await Courses.findOne({ _id: Cid });
    if(course){
      console.log("Found course");
    }
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    course.title = CourseTitle;
    course.description = CourseDescription;
    course.price = CoursePrice;
    course.imageLink = CourseImage;
    course.published = Status;
    (course.category = CourseCategory),
      (course.level = CourseLevel),
      (course.language = CourseLanguage),
      (course.duration = CourseDuration),
      (course.whatYoullLearn = inputValues),
      (course.prerequisites = Prerequisites);

    await course.save();

    res.status(200).json({ message: "Successfully Updated" });
  } catch (error) {
    console.log(error, "Something went Wrong");
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = UpdateCourse;
