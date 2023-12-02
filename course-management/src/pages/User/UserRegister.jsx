import React, { useState } from "react";
import "./UserRegister.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [flag, setflag] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    console.log(name,email,password,confirmPassword,username);
    
    if(name===""||email===""||password===""||confirmPassword===""||username===""){
      alert('All inputs require.');
    }
    if (!flag) {
      try {
        const response = await fetch(process.env.REACT_APP_API + '/user/user-register', {
          method: "POST",
          body: JSON.stringify({
            data:{
              name: name,
              email: email,
              password: password,
              username: username
            }
          }),
          headers: {
            "Content-Type": "application/json", 
          }
        });
        console.log("response", response);

        if(response.status === 409){
          alert("already registered please Login");
          navigate('/login');
        }
  
        if (response.ok) {
          console.log("Registration successful");
          navigate('/login');
        } else {
          console.log("Registration failed");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };
  

  const checkPass = () => {
    if (password === confirmPassword) {
      setflag(false);
    } else {
      setflag(true);
    }
  };

  return (
    <React.Fragment>
      <div className="container-user-register">
      <div className="registration-box">
      <h1 className="login-heading">
            User&nbsp;<span> Registration</span>
          </h1>
          <div className="userLogin">Already a user?&nbsp;<Link to={'/userlogin'}>Login</Link></div>
        <form className="formData">
          <div className="input-field">
            <label htmlFor="name" className="registerlabel">*Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="username" className="registerlabel">*username</label>
            <input
              type="username"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email" className="registerlabel">*Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password" className="registerlabel">*Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="confirmPassword" className="registerlabel">*Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={checkPass}
            />
          </div>
          {flag && <div className="statement">Password Not Matching Please reload and Continue</div>}
          <button type="button" onClick={handleRegister} class="register-button">
            Register
          </button>
        </form>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Registration;
