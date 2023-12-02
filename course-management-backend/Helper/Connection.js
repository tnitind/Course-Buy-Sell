const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

DB = process.env.DB_NAME;
USERNAME = process.env.DB_USERNAME;
PASSWORD = process.env.DB_PASSWORD;
CLUSTERURL = process.env.CLUSTERURL;

function connection() {
  const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTERURL}/${DB}`;
  mongoose.connect(MONGODB_URI);

  mongoose.connection.on("connected", () => {
    console.log("MongoDb Connected");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected");
  });
  mongoose.connection.on("error", (err) => {
    console.log("error on mongoDB:", err.message);
  });
}

module.exports = connection;
