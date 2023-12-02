const Courses = require("../../Models/Courses");

const SellerDashboard = async (req, res) => {
  try {
    const id  = req.body.courseId;
    console.log("seller dashboard single course", id);

    if (!id) {
      return res.status(400).json({ message: "No Seller Found" }); // Bad Request
    }

    const SellerCourses = await Courses.find({ createdBy: id });
    console.log(SellerCourses);
    if (SellerCourses.length === 0) {
      return res.status(404).json({ message: "Courses Not Found" });
    }

    return res.json(SellerCourses);

  } catch (err) {
    console.log("error: ", err.message);
    res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports = SellerDashboard;
