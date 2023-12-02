import React from "react";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import { useState } from "react";
import { useAuth } from "../../../authentication/AuthContext";
import { useNavigate } from "react-router";


function Buycoins() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [money, setMoney] = useState(0);

  const buycoinhandel = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API + "/user/buy-coins",
        {
          method: "POST",
          body: JSON.stringify({
            data: {
              ID: user.userID,
              CoinPrice: money,
            },
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log("Single Course", data.course);

      if (response.status === 401) {
        alert("Invalid Credentials");
      }

      if (response.ok) {
        alert("Money added please login again");
        navigate("/userlogin");
      } else {
        console.log("Problem adding money");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />

      <h1 className="login-heading">
        Buy&nbsp;<span>Coins</span>
      </h1>
      <div
        className="buycoincontainer"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "30px", color: '#6415FF' }}>
          Name:- {user.FullName}
        </h1>
        <label> Put Coin Value</label>
        <input
          value={money}
          onChange={(e) => {
            setMoney(e.target.value);
          }}
        ></input>
        <button
          className="button-66"
          style={{ marginBottom: "40px", marginTop: "30px" }}
          onClick={buycoinhandel}
        >
          Buy Coins
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Buycoins;
