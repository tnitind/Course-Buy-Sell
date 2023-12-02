const Courses = require("../../Models/Courses");

// Function to fetch course data by ID
const getCourseById = async (courseId) => {
  if (courseId === "0") {
    return null; // Skip courseId "0"
  }
  return await Courses.findById(courseId);
};

const ViewAllCourses = async (req, res) => {
  try {
    const data = req.body.courseId; // Access courseId array
    console.log("Received data:", data);

    const coursesData = [];

    for (const courseId of data) {
      const course = await getCourseById(courseId);
      if (course) {
        coursesData.push(course);
      }
    }

    if (coursesData.length > 0) {
      console.log("Found courses:", coursesData);
      res.status(200).json({ coursesData });
    } else {
      console.log("No courses found.");
      res.status(404).json({ message: "No courses found." });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = ViewAllCourses;
