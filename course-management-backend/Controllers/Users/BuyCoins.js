const UserModel = require("../../Models/User");

const BuyCoins = async (req, res) => {
  try {
    const { ID, CoinPrice } = req.body.data;
    
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: ID },
      { $inc: { moneyBalance: CoinPrice } },
      { new: true } // To return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "Balance Increased Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = BuyCoins;
