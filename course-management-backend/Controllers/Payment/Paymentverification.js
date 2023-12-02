const crypto = require("crypto");

const Paymentverification = async (req, res) => {
  console.log(req.body);
    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
    const body = razorpay_order_id +  "|" + razorpay_payment_id;

    const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

    console.log("sig received ", razorpay_signature);
    console.log("sig generated", expectedSignature);

    const isAuthentic  = expectedSignature === razorpay_signature;
    if(isAuthentic){
        res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
    }
    else{
        res.status(400).json({ success: false });
    }
};

module.exports = Paymentverification;