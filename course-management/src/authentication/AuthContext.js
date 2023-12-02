import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [user, setUser] = useState({
    EmailID: '',
    FullName: '',
    Money: '',
    OrderedArray: [],
    role: '',
    userID: '',
    Contact: '',
    PaymentDetail: '',
    ProfilePicture: '',
    PublishedCourse: '',
    Qualification: '',
    ShortBio: '',
    Subject: '',
    UserName: '',
    Website: ''
  });

  const Sellerlogin = (userData) => {
    if(userData){
      console.log("Seller login auth" , userData);
     
      setUser({
        EmailID: '',
        FullName: userData.name,
        Money: '',
        OrderedArray: '',
        role: userData.role,
        userID: userData._id,
        Contact: userData.contactinfo,
        PaymentDetail: userData.paymentdetails,
        ProfilePicture: userData.profilePicture,
        PublishedCourse: userData.publishedCourses,
        Qualification: userData.qualification,
        ShortBio: userData.shortbio,
        Subject: userData.subject,
        UserName: userData.username,
        Website: userData.website
      });
      setIsLoggedIn(true);
    }
    console.log("Userdata in auth", userData);
    console.log("Userdata in auth", user);  
  };

  const userlogin = ( userData ) => {
    if(userData){
      setUser({
        EmailID: userData.userData.EmailID,
        FullName: userData.userData.FullName,
        Money: userData.userData.Money,
        OrderedArray: userData.userData.OrderedArray,
        role: userData.userData.role,
        userID: userData.userData.userID,
        Contact: '',
        PaymentDetail: '',
        ProfilePicture: '',
        PublishedCourse: '',
        Qualification: '',
        ShortBio: '',
        Subject: '',
        UserName: '',
        Website: ''
      });
      console.log(userData);
      setIsLoggedIn(true);
    }
    console.log("Userdata in auth", userData);
    console.log("Userdata in auth", user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    setUser(null); // Clear the user data when the user logs out
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, Sellerlogin, logout, userlogin }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
