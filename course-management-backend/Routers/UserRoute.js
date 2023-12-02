const express = require("express");
const Route = express.Router();

const Register = require("../Controllers/Users/Register");
const DisplayCart = require("../Controllers/Cart/DisplayCart");
const AddCart = require("../Controllers/Cart/AddtoCart");
const DeletefromCart = require("../Controllers/Cart/DeletefromCart");
const BuyItem = require("../Controllers/Users/BuyItem");
const BuyCoins = require("../Controllers/Users/BuyCoins");
const ShowCourses = require("../Controllers/Courses/ShowCourses");
const Orderedcourses = require("../Controllers/Users/OrderedCourse");
const ViewCourse = require("../Controllers/Courses/Viewcourse");
const UserLogin = require("../Controllers/Users/UserLogin");
const Userdashboard = require('../Controllers/Users/OrderedCourse');

Route.get('/display-cart', DisplayCart);
Route.post('/Add-Cart', AddCart);
Route.post('/Delete-from-cart', DeletefromCart);
Route.post('/buy-item', BuyItem);
Route.post('/buy-coins', BuyCoins);
Route.post('/user-register',Register);
Route.get('/displaycourses', ShowCourses );
Route.post('/orderedcourses', Orderedcourses);
Route.post('/viewcourse',ViewCourse);
Route.post('/userlogin', UserLogin);
Route.post('/ordereditems', Userdashboard );

module.exports = Route;