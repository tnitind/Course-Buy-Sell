const seller = require("../../Models/Seller");

async function SellerProfileForm(req, res) {
  console.log("Reached Inside Register Route");
  try {
    let {
      userId
    } = req.body; // input from user

    console.log(req.body);

    if (!req.body) {
      res.status(400);
      return res.send(
        JSON.stringify({ message: "Please fill all the details" })
      );
    }

    const oldUser = await seller.findOne({ id: userId });

    if (!oldUser) {
      return (
        res.status(404),
        res.send(
          JSON.stringify({
            message: "We can't able to find your ID, Please contact",
          })
        )
      );
    }

    if (oldUser) {
      console.log("Finded Seller");
      return res.status(200).json({ oldUser });
    } else {
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  } catch (err) {
    console.log("Error in Register route:", err.message);
    return res.status(500);
  }
}

module.exports = SellerProfileForm;
