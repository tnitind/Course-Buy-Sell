import React, { useState } from "react";
import './SellerRegistration.css';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const SellerRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [shortBio, setShortBio] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [subject, setSubject] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [website, setWebsite] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [flag, setflag] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleRegister = async() => {
    if(!termsAccepted){
      alert("T&C not accepted");
    }
    console.log(
      name,
      email,
      username,
      password,
      profilePicture,
      shortBio,
      contactInfo,
      subject,
      qualifications,
      website,
      paymentDetails,
    );

    try {
      const response = await fetch( process.env.REACT_APP_API + '/seller/seller-register', {
        method: "POST",
        body: JSON.stringify({
          Name: name,
          Email: email,
          Username: username,
          Password: password,
          ProfilePicture: profilePicture,
          Shortbio: shortBio,
          Contactinfo: contactInfo,
          Subject: subject,
          Qualification: qualifications,
          Website: website,
          Paymentdetails: paymentDetails
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
    
      const responseData = await response.json(); // Await and store the response data
    
      console.log("response", responseData); // Log the response data
    
      if (response.status === 409) {
        alert("already registered please Login");
        navigate('/login');
      }
    
      if (response.ok) {
        alert("Registration successful");
        navigate('/login');
      } else {
        console.log("Registration failed");
      }
    } catch (error) {
      console.log("Error in Seller Register", error);
    }    
  };

  const checkConfirmPassword = () => {
    if (password === confirmPassword) {
      setflag(false);
    } else {
      setflag(true);
    }
    if(flag){
      // fetch to store Information
    }
  };

  return (
    <div className="Sellercontainer">
      <div className="sellerregistration-box">
      <h1 className="login-heading">
            Instructor&nbsp;<span>Registration</span>
          </h1>
          <div className="signupbutton">Already a Seller?&nbsp;<Link to={'/login'}>Login</Link></div>
        <form>

        <div className="two-fields">
          <div className="seller-input-field">
            <label htmlFor="name" className="registration-label"><span>*</span>Name</label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="seller-input-field">
            <label htmlFor="email" className="registration-label"><span>*</span>Username</label>
            <input
              type="email"
              placeholder="Email id"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          </div>
          <div className="two-fields">
          <div className="seller-input-field">
            <label htmlFor="password" className="registration-label"><span>*</span>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="seller-input-field">
            <label htmlFor="confirmPassword" className="registration-label"><span>*</span>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={checkConfirmPassword}
            />
          </div>
          
          </div>
          

          <div className="two-fields">
          <div className="seller-input-field">
            <label htmlFor="contactInfo" className="registration-label"><span>*</span>Contact Information</label>
            <input
              type="text"
              id="contactInfo"
              placeholder="Contact Information"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
            />
          </div>
          <div className="seller-input-field">
            <label htmlFor="subject" className="registration-label"><span>*</span>Field Of Teaching</label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          </div>
          <div className="two-fields">
          <div className="seller-input-field">
            <label htmlFor="qualifications" className="registration-label"><span>*</span>Qualifications</label>
            <input
              id="qualifications"
              placeholder="Qualifications"
              value={qualifications}
              onChange={(e) => setQualifications(e.target.value)}
            />
          </div>
          <div className="seller-input-field">
            <label htmlFor="website" className="registration-label"><span>*</span>Website/Social Link</label>
            <input
              type="text"
              id="website"
              placeholder="Website/Social Media Links"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          </div>
          <div className="two-fields" >
          <div className="seller-input-field">
            <label htmlFor="paymentDetails" className="registration-label"><span>*</span>Payment Details</label>
            <input
              type="text"
              id="paymentDetails"
              placeholder="Payment Details"
              value={paymentDetails}
              onChange={(e) => setPaymentDetails(e.target.value)}
            />
          </div>
          <div className="seller-input-field">
            <label htmlFor="paymentDetails" className="registration-label"><span>*</span>Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          </div>
          <div className="registration-input-field">
            <label htmlFor="profilePicture" className="registration-label"><span>*</span>Profile Picture</label>
            <input
            className="image-file-input"
            placeholder="Image Link"
            value={profilePicture}
              id="profilePicture"
              onChange={(e) => setProfilePicture(e.target.value)}
            />
          </div>
          <div className="shortbio-input-field">
            <label htmlFor="shortBio" className="registration-label"><span>*</span>Short Bio</label>
            <textarea
              className="image-file-input"
              placeholder="Short Bio"
              value={shortBio}
              onChange={(e) => setShortBio(e.target.value)}
            />
          </div>
          <div className="tc-check" >
            <div className="checkandstatemant">
              <input
                type="checkbox"
                checked={termsAccepted}
                className="checkbox"
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              I accept the terms and conditions
            </div>
            {flag && <div className="statement" >Password not matching Please Reload</div>}
          </div>

          <button type="button"  class="login-button" onClick={handleRegister}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
export default SellerRegister;
