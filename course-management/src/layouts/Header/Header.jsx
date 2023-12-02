import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../authentication/AuthContext";
import { Outlet, Link } from "react-router-dom";
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { useSelector } from "react-redux";


const Header = () => {
  defineElement(lottie.loadAnimation);
  const Navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuth();
  console.log("user from header", user)

  const reduxItems = useSelector((state) => state.cart.value);
  
  const showmoneypage = () => {
    Navigate("/buycoin");
  };

  const opendashboard = () => {
    console.log("user", user);
    if (user.role === "seller") {
      Navigate("/sellerdashboard");
    } else {
      Navigate("/userdashboard");
    }
  };
  const handleLogout = () => {
    Navigate("/courses");
    logout();
  };
  const showcart = () => {
    Navigate("/cart");
  };

  return (
    <header className="header-container">
      <div className="left-part">
        <lord-icon
            src="https://cdn.lordicon.com/dxoycpzg.json"
            trigger="loop"
            delay="1000"
            colors="primary:#f24c00,secondary:#646e78,tertiary:#f4f19c,quaternary:#ebe6ef,quinary:#f9c9c0"
            style={{width:'80px', height:'80px'}}>
        </lord-icon>
        <div onClick={()=>{Navigate('/')}} to={"/"} className="logo-name"> CourseWorld </div>
      </div>
      <div className="right-part">
        {isLoggedIn ? (
          <>
          <div className="namelogorole">
          <div className="logo_role">
            <lord-icon
                src="https://cdn.lordicon.com/dxjqoygy.json"
                trigger="click"
                colors="primary:#ffffff,secondary:#ffffff"
                state="hover-looking-around"
                style={{width:'45px', height:'45px', borderwidth:'2px',
                borderWidth:' 1px',
                borderStyle: 'solid',
                borderRadius: '50%' }}>
            </lord-icon>
            <div className="userrole"></div>
          </div>
            
            <span>
            {user.FullName}
            </span>
            <div>
          </div>
          </div>
              <button className="button-66" onClick={opendashboard}>
              {user.role} Dashboard
              </button>
              <button className="button-66" onClick={()=>{Navigate('/courses')}}>
              Courses
              </button>
            <button onClick={handleLogout} className="button-66">
              Logout
            </button>
            <div className="walletmoney">
              {user.role === "user" ? user.Money.toFixed(2) : ""}
            </div>
            <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
              <lord-icon
                  onClick={showmoneypage}
                  src="https://cdn.lordicon.com/hpnrikyx.json"
                  trigger="hover"
                  colors="primary:#b26836,secondary:#ffc738"
                  style={{width:'30px', height:'30px', cursor:'pointer'}}>
              </lord-icon>
             
            <lord-icon
              src="https://cdn.lordicon.com/slkvcfos.json"
              trigger="hover"
              onClick={showcart}
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: "50px", height: "50px", marginLeft:'30px', marginRight:'12px', cursor:'pointer' }}
            ></lord-icon>

            <span className="CartCount">{reduxItems.length}</span>
          </>
        ) : (
          <>
            <div className="buttons">
              <button className="button-66" onClick={()=>{Navigate('/userlogin')}}>
                <Link to="/userlogin">Sign In/Sign Up</Link>
              </button>
            </div>
            <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/slkvcfos.json"
              trigger="hover"
              onClick={()=>{Navigate('/userlogin')}}
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: "50px", height: "50px", marginLeft:'30px', marginRight:'12px', cursor:'pointer', marginTop:'12px' }}
            ></lord-icon>{" "}
           
            <span className="CartCount">0</span>
          </>
        )}
      </div>
      <Outlet />
    </header>
  );
};

export default Header;
