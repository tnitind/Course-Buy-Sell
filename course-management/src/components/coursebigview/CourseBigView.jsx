import React from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import { useState, useEffect } from "react";
import { useAuth } from "../../authentication/AuthContext";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import "./CourseBigView.css";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addTocart } from "../../redux/cartSlice";

function CourseBigView() {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();
  const { id } = useParams();
  const [data, setData] = useState(false);
  const [sellerName, setSellerName] = useState();

  const Navigate = useNavigate();
  const [course, setCourse] = useState([]);

  const handleAddcart = () => {
    if (isLoggedIn === true) {
        dispatch(addTocart(id));
    } else {
      alert("Please, Login or Signup");
    }
  };

  const handlebuybutton = () => {
    if (!isLoggedIn) {
      alert("Please login to Buy");
      return;
    }

    const buyer = user.userID;
    const email = user.EmailID;
    const Name = user.FullName;
    console.log("buy now clicked", buyer, email, Name);

    if (isLoggedIn === true) {
      Navigate(`/buyitem/${id}/${buyer}/${email}/${Name}`);
    } else {
      alert("Please, Login or Signup");
    }
  };

  const handelrazorpay = async () => {
    if (!isLoggedIn) {
      alert("Please login to Buy");
      return;
    }

    const {
      data: { key },
    } = await axios.get(process.env.REACT_APP_API + "/payment/getkey");
    const {
      data: { order },
    } = await axios.post(process.env.REACT_APP_API + "/payment/checkout", {
      amount: course.price,
    });

    // console.log("data from razor pay", data);

    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Ashay Tamrakar",
      description: "Test Transaction",
      image:
        "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: process.env.REACT_APP_API + "/payment/paymentverification",
      prefill: {
        name: user.FullName,
        email: user.EmailID,
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#6415FF",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_API + "/user/viewcourse",
          {
            method: "POST",
            body: JSON.stringify({ id }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("Single Course", data);
  
        if (response.status === 404) {
          alert("Course Not found");
        }
  
        if (response.ok) {
          console.log("Course Found");
          console.log("just for sample", data.data);
          setData(true);
          setCourse(data.data);
  
          // Once the course data is set, call fetchname with the createdBy ID
          fetchname(data.data.createdBy);
        } else {
          console.log("Course Not Found");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const fetchname = async (sellerID) => {
      try {
        console.log("useEffect in SellerName ", sellerID);
        const fetchsellerName = await fetch(
          process.env.REACT_APP_API + '/seller/sellername',
          {
            method: "POST",
            body: JSON.stringify({sellerID}),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (fetchsellerName.status === 404) {
          console.log("Seller Name not found");
        }
        
        if (fetchsellerName.status === 200) {
          const senm = await fetchsellerName.json();
          console.log(senm);  
          setSellerName(senm.SellerName);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    // Start by calling fetchData
    fetchData();
  
  }, [id]);
  
  

  // useEffect ( () => {

  // }, [course]);

  return (
    <React.Fragment>
      <Header />
      <div>
        <div className="viewupperdiv">
          <h2 className="viewtitle">{course.title}</h2>
          <p className="Course_data_info">
            {course.duration} minutes | {course.level} Level | {course.language}{" "}
            Subtitles | {course.category}
          </p>
          <p className="createdby">
            Created By-<span>&nbsp;{sellerName}</span>
          </p>
        </div>

        <div className="viewlowerdiv">
          <div className="learn">
            <p className="secondsegheading">About The Course</p>
            <p className="viewdesc">{course.description}</p>
            <p className="secondsegheading">What you'll learn</p>
            {data && (<p className="secondsegdesc">
              {course.whatYoullLearn.map((item, itemIndex) => (
                <p key={itemIndex}>
                  <span>&#10003;</span> {item}
                </p>
              ))}
            </p>)}
            <hp className="secondsegheading"> Requirements</hp>
            <p className="learndesc">{course.prerequisites}</p>
          </div>

          <div className="pemplate">
            <img src={course.imageLink} alt="img" className="secondsegimage" />
            <p className="pricetag">
              ${course.price}{" "}
              <span className="pricespan"> ${course.price * 2} </span>{" "}
              <span className="discountoffer">50% OFF</span>
            </p>
            <div className="pemplatesbuttons">
              <button className="addtocartpemplate" onClick={handleAddcart}>
                Add to cart
              </button>
              <button className="buynowpemplate" onClick={handlebuybutton}>
                Buy From Coins
              </button>
              <button className="buynowpemplate" onClick={handelrazorpay}>
                RazorPay
              </button>
              <p className="moneyback">*30 Day Money-Back Guarantee*</p>
            </div>

            <div className="courseinclude">
              <h3 className="courseincludeheading">Course Will Include:- </h3>
              <div className="courseincludepoints">
                <p>1 hour on-demand video</p>
                <p>7 downloadable resources</p>
                <p>Access on mobile and TV</p>
                <p>Full lifetime access</p>
                <p>Certificate of Completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default CourseBigView;
