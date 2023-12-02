const Razorpay = require('razorpay');
var instance = new Razorpay({ key_id: process.env.RAZORPAY_API_KEY, key_secret: process.env.RAZORPAY_API_SECRET })

const Checkout = async (req, res) => {
  const amount = req.body.amount;
  var options = {
    amount: Number(amount * 100), // amount in the smallest currency unit
    currency: "INR",
  };
  instance.orders.create(options, function (err, order) {
    console.log(order);
    res.status(200).json({ success: true, order });
  });
};

module.exports = Checkout;