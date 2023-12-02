const mongoose = require("mongoose");
const jwt = require(`jsonwebtoken`);

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageLink: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  language: { type: String, required: true },
  duration: { type: Number, required: true },
  level: { type: String, required: true },
  whatYoullLearn: [{ type: String, required: true }],
  category:{type:String, required:true},
  prerequisites: { type: String, required: true },
  createdBy: { type: String, required: true },
  published: { type: Boolean, default: false },
});

// Generate Auth Token
CourseSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.token = token;
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongoose.model("courses", CourseSchema);
