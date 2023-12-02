const mongoose = require("mongoose");
const jwt = require(`jsonwebtoken`);

const sellerSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String },
  profilePicture: { type: String, required: true },
  shortbio: { type: String, required: true },
  contactinfo: { type: Number, required: true, length: 10 },
  subject: { type: String, required: true },
  qualification: { type: String, required: true },
  website: { type: String, required: true },
  paymentdetails: { type: String, required: true },
  publishedCourses: {
    type: [String],
    ref: "Courses",
    default: [0],
  },
  token: String,
  role: { type: String, default: "seller" }, // Role of User
});

// Generate Auth Token
sellerSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.token = token;
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongoose.model("seller", sellerSchema);