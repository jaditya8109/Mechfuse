import React from 'react'
import { useContext, useRef } from "react";
import "./login.css";
import {Link} from "react-router-dom";
import { loginCall } from '../apiCalls';
import { AuthContext } from "../context/AuthContext";
import { CircularProgress } from "@material-ui/core";


export default function Login() {
  const username = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { username: username.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

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
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span  className="loginForgot">Forgot Password?</span>
            
              <button className="loginRegisterButton">
              <Link to="/register">
                Create a New Account
              </Link>
              </button>
            
          </form>
        </div>
      </div>
    </div>
  )
}
