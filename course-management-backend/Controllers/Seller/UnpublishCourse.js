const Seller = require("../../Models/Seller");

const Sellername =  async (req, res)=>{

  try {
    const ID = req.body.sellerID;
    console.log("Seller Id for name", ID);
    const data = await Seller.findOne({ _id : ID });
    console.log("Data", data);
    if(!data){
      return res.status(404).json({msg:"Seller Not Found"});
    }
    if(data){
      return res.status(200).json({SellerName : data.name });
    }
  } catch (error) {
    console.log("Seller name error",error);
  }
}


module.exports = Sellername;