import React from "react";
import { useAuth } from "../../../authentication/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import './Userlogin.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userlogin } = useAuth(); // no use


  const userloginApi = async () => {

    try {
      const response = await fetch(process.env.REACT_APP_API + "/user/userlogin", {
        method: "POST",
        body: JSON.stringify({
          data: {
            Username: username,
            Password: password,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const data = await response.json();

      console.log("userLogin Response", data);
      console.log("role", data.role);
      console.log("ID", data.userID);

      if (response.status === 401) {
        alert("Invalid Credentials");
      }
      if (response.status === 404) {
        alert("User Not Found");
      }
      if (response.ok) {
        console.log("user Login successful");

        await userlogin({ userData: data });
        navigate("/courses");

      } else {
        console.log("user Login failed");
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
          Log<span>in</span>
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
          <div className="loginSignup">Dont have account?&nbsp;<Link to={'/register'}>Signup</Link></div>

          <button onClick={userloginApi} 
          class="seller-register-button">Login</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
