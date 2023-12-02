const express = require("express");
const Route = express.Router();

const Checkout = require("../Controllers/Payment/paymentController");
const Paymentverification = require("../Controllers/Payment/Paymentverification");

Route.post('/checkout', Checkout);
Route.post('/Paymentverification',Paymentverification );

module.exports = Route;