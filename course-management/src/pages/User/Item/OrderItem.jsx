import React, { useState, useEffect } from "react";
import "./OrderItem.css";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useAuth } from "../../../authentication/AuthContext";


function Buyitem() {
  const Navigate = useNavigate();
  const { id, buyer, email, Name } = useParams();
  console.log(id, buyer, email, Name);
  const { user } = useAuth();

  const [course, setCourse] = useState("");
  const [name, setName] = useState(Name);
  const [emailID, setEmailID] = useState(email);
  
  console.log(id);

  useEffect(() => {
    console.log("useEffect in Checkout");

    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_API + "/user/viewcourse",
          {
            method: "POST",
            body: JSON.stringify({id}),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("Single Course", data.data);

        if (response.status === 401) {
          alert("Invalid Credentials");
        }

        if (response.ok) {
          console.log("Course Found");
          setCourse(data.data);
        } else {
          console.log("Course Not Found");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [id]);



    const handlecheckout = async () => {
      if (user.Money < course.price) {
        alert("Insufficient Coins");
        return;
      }
      try {
        const resp = await fetch(process.env.REACT_APP_API + "/user/buy-item", {
          method: "POST",
          body: JSON.stringify({
            data: {
              id: user.userID,
              cid: id,
            },
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Response Of buy");

        if (resp.status === 403) {
          alert("Already Purchased");
          return;
        }
        if (resp.status === 402) {
          alert("Insufficient Balance");
          return;
        }
        if (resp.status === 403) {
          alert("User/Course Not found");
          return;
        }

        if (resp.ok) {
          console.log("Congratulations for Buying a new course");
          Navigate("/userdashboard");
          // setCourse(data.course);
        } else {
          console.log("Some Error");
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <React.Fragment>
        <Header />
        <div className="buy-now-container">
          <div className="primary-part">
            <h2 className="billingdetails">Billing Details</h2>
            <div className="nameaddressinputs">
              <label htmlFor="name">Name:-</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label htmlFor="address">Address:</label>
              <input
                type="email"
                id="address"
                value={emailID}
                onChange={(e) => {
                  setEmailID(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="secondary-part">
            <h2 className="billingdetails">Order Details</h2>
            <p>Title: {course.title}</p>
            <p>Price: {course.price} coins</p>
          </div>
        </div>
        <div className="summary">
          <h2 className="billingdetails">Summary</h2>
          <p>Original Price: {course.price * 2} coins</p>
          <p>Discount: {course.price} coins</p>
          <div className="total">
            <h3>Total: {course.price} coins</h3>
          </div>
          <div className="checkout-button">
            <button className="button-66" onClick={handlecheckout}>
              Complete Checkout
            </button>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  };

export default Buyitem;
