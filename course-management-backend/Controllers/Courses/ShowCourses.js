const Courses = require("../../Models/Courses");


const ShowCourses = async (req, res)=>{
    try {
        const data = await Courses.find({published:true});
        if(data){
            return res.status(200).json({data});
        }
        else{
            return res.status(404).json({msg:"No course Found"});
        }
    } catch (error) {
        console.log("Error In Show courses",error);
    }
}

module.exports = ShowCourses;

