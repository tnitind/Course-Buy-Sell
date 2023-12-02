const bcrypt = require("bcryptjs");
const UsersModelss = require("../../Models/User");
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const { Username, Password } = req.body.data;
    console.log(JSON.stringify(req.body.data));

    if (!req.body.data) {
      return res.status(400).json({ message: "Please Fill the Data" }); // Bad Request
    }

    const UserModel = await UsersModelss.findOne({ username: Username });

    console.log("User Login:", UserModel);

    if (!UserModel) {
      return res.status(404).json({ message: "User Not Found" });
    }

    if (UserModel.Password === null || UserModel.password === null) {
      res.status(401).json({ message: "Invalid Credentials" });
      return;
    }

    const isMatch = await bcrypt.compare(Password, UserModel.password); // Decrypt Password (Secutity Feature)
    const token = await UserModel.generateAuthToken();
    console.log("Token", token);

    if (!isMatch) {
      console.log("Login failed");
      res.status(401).json({ message: "Invalid Credentials" });
    } else {
      res
        .status(200)
        .cookie("jwt", token, {
          expires: new Date(Date.now() + 2589200000),
          httpOnly: true,
        })
        .json({
          message: "User signin Successfully",
          role: UserModel.role,
          userID: UserModel.id,
          FullName: UserModel.name,
          OrderedArray: UserModel.orderedItems,
          EmailID: UserModel.email,
          Money: UserModel.moneyBalance
        });
    }
  } catch (err) {
    console.log("error: ", err.message);
  }
};

module.exports = login;
