import React from "react";
import "./Login.css";
import { useAuth } from "../../authentication/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, Sellerlogin } = useAuth();

  const handleLogin = async () => {

    console.log("SellerLogin");
    try {
      let response = await fetch(
        process.env.REACT_APP_API + "/seller/seller-login",
        {
          method: "POST",
          body: JSON.stringify({
            Username:username,
            Password:password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 401) {
        alert("Invalid Credentials");
        return 
      }
      if (response.status === 404) {
        alert("User Not Found");
        return
      }
      if (response.status === 400) {
        alert("Please fill the data");
        return
      }

      if (response.ok) {
        console.log("Login successful");
        response = await response.json();
        await Sellerlogin(response.userData);
        navigate("/courses");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log("error in auth", error);
    }
  };

  return (
    <React.Fragment>
      <div className="loginContainer">
        <div className="login-box">
          <h1 className="login-heading">
            Seller<span>LogIn</span>
          </h1>
          <div className="lable-input">
            <label className="lables">Username*</label>
            <input
              className="login-inputs"
              type="text"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="lable-input">
            <label className="lables">Password*</label>
            <input
              className="login-inputs"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="loginSignup">
            Not a Seller?&nbsp;<Link to={"/sellerregister"}>Signup</Link>
          </div>

          <button onClick={handleLogin} class="seller-register-button">
            Login
          </button>
        </div>
        {isLoggedIn && (
          <div>
            <h6>Logged In!</h6>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Login;
