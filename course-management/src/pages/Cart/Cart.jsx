import React, { useState, useEffect } from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import "./Cart.css";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { useSelector } from "react-redux";
import { deleteFromcart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

function Cart() {
  defineElement(lottie.loadAnimation);
  const reduxItems = useSelector((state) => state.cart.value);
  console.log(reduxItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_API + "/user/ordereditems",
          {
            method: "POST",
            body: JSON.stringify({ courseId: reduxItems }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 401) {
          alert("Unauthorized");
        }

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setCartItems(data.coursesData);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle the error and show a user-friendly message if needed.
      }
    };

    fetchUserData();
  }, [reduxItems]);

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price;
    }, 0);

    setTotal(totalPrice);
  }, [cartItems]);

  return (
    <React.Fragment>
      <Header />

      {cartItems.length === 0 ? (
        
        <div className="empty-cart">
          <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
          <lord-icon
              src="https://cdn.lordicon.com/hbvgknxo.json"
              trigger="loop"
              colors="primary:#ebe6ef,secondary:#6415ff,tertiary:#5c230a"
              style={{width:'200px', height:'200px'}}>
          </lord-icon>
          <span className="no-item">No Item In Cart</span>
          <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
        </div>
      ) : (
        <div className="cart">
          <h1 className="cart-heading">
            Cart&nbsp;<span>Items</span>
          </h1>
          <div className="list-checkout">
            <div className="multi-list-box">
              {cartItems.map((item) => (
                <div className="lists-box" key={item.id}>
                  <div className="left-image">
                    <img
                      src={item.imageLink}
                      alt="img"
                      className="cart-image"
                    />
                    <div className="right-info">
                      <div className="title-cart">{item.title}</div>
                      <div className="author-cart">{item.author}</div>
                      <div className="cart-rating">
                        Rating{" "}
                        <span className="rating">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="right-part-cart">
                    <div className="right-price-tag">Price: {item.price}</div>
                    <lord-icon
                      src="https://cdn.lordicon.com/jmkrnisz.json"
                      trigger="hover"
                      colors="primary:#6415ff"
                      className="cross-button"
                      cursor="pointer"
                      style={{ marginLeft: "20px", cursor: "pointer" }}
                      onClick={() => dispatch(deleteFromcart(item._id))}
                    ></lord-icon>
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout-box">
              <div className="price-total">
                Value: <span>{total.toFixed(2)}</span>
                <br />
                Discount: <span>50%</span>
                <br />
                Total: <span>{(total.toFixed(2) / 2).toFixed(2)}</span>
              </div>
              <button className="button-66">Checkout</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </React.Fragment>
  );
}

export default Cart;
