const Courses = require("../../Models/Courses");

const Viewcourse = async (req, res) => {
    const { id } = req.body; // Assuming the key in req.body is 'id'
    console.log("id of view course", id);
    try {
        const data = await Courses.findOne({ _id: id }); // Use the extracted id here
        console.log("data of view course", data);
        if (!data) {
            return res.status(404).json({ msg: "no course found" });
        } else {
            return res.status(200).json({ data });
        }
    } catch (error) {
        console.log("Error in View course", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
}

module.exports = Viewcourse;
