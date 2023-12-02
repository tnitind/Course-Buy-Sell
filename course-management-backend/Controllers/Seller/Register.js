const user = require("../../Models/Seller");
const bcrypt = require("bcryptjs");

const register = async(req, res)=> {
  console.log("Reached Inside Register Route");
  try {
    const {
      Name,
      Email,
      Username,
      Password,
      ProfilePicture,
      Shortbio,
      Contactinfo,
      Subject,
      Qualification,
      Website,
      Paymentdetails,
    } = req.body; // input from user

    console.log(
      req.body
    );

    if (!(req.body)) {
      res.status(400);
      return res.send(
        JSON.stringify({ message: "Each Data required" })
      );
    }

    const oldUser = await user.findOne({ email : Email });

    if (oldUser) {
      return (
        res.status(409),
        res.send(
          JSON.stringify({
            message:
              "Already Register as User, please Use different Username and Email",
          })
        )
      );
    }

    const salt = bcrypt.genSaltSync(10);

    const hashedPassword = bcrypt.hashSync(Password, salt); // created hashed Password for security
    const EncypriptedPayment = bcrypt.hashSync(Paymentdetails, salt); // created hashed Password for security
    {
      const Createuser = await user.create({
        FullName : Name,
        Email : Email,
        username : Username,
        password: hashedPassword,
        name : Name,
        profilePicture : ProfilePicture,
        shortbio : Shortbio,
        contactinfo : Contactinfo,
        subject : Subject,
        qualification : Qualification,
        website : Website,
        paymentdetails : EncypriptedPayment
      });

      if (Createuser) {
        console.log("Created the Data");
        return res.status(201).json({ msg: "Created the Data" });
      } else {
        return res.status(500).json({ msg: "Internal Server Error" });
      }
    }
    
  } catch (err) {
    console.log("Error in Register route:", err.message);
    return res.status(500);
  }
}

module.exports = register;
