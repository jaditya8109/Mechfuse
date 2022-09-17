import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./app.css";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <NewsContextProvider>
      <Routes>  
        <Route exact path="/" element={user ? <News/> : <Login/>} ></Route>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>}></Route>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register/>}></Route>
        <Route path="/logout" element={ <Navigate to="/" />  }></Route>
      </Routes>
      </NewsContextProvider>
    </Router>
    
  );
}

export default App;
