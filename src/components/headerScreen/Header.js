import React, { useState } from "react";
import { Navbar } from "./Navbar";
import Profile from "../../image/user.png";
import { LoginPopUp } from "../ui/LoginPopUp";
import axios from "axios";
export const Header = () => {
  const [popUp, setPopUp] = useState(false);
  const activeHandler = () => {
    if (localStorage.getItem("login") !== null) {
      window.location.href = "/cabinet";
    } else {
      setPopUp(true);
    }
  };
  return (
    <header className="site-header">
      <Navbar />
      <div className="profile-link" onClick={activeHandler}>
        <img src={Profile} alt="" />
      </div>
      <LoginPopUp popUp={popUp} closePop={setPopUp} />
    </header>
  );
};
