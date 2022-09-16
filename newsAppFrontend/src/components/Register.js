import React from 'react'
import "./register.css";
import {Link} from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";

export default function Register() {

  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">News Web App</h3>
          <span className="loginDesc">
            This is a dashboard for News Web App for Mechfuse Assignment.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" ref={username} className="loginInput" />
            <input type='password' placeholder="Password" ref={password} className="loginInput" />
            <input type='password' placeholder="Password Again" ref={passwordAgain} className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
            <Link to="/login">
              Log into Account
            </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
