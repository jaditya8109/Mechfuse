import React, { createContext, useEffect, useState } from "react";
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
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NewsContextProvider>
      <Routes>  
        <Route path="/news" element={<News />}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      </NewsContextProvider>
    </Router>
    
  );
}

export default App;
