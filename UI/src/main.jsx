import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Componentrs/AuthPages/Login.jsx";
import Signup from "./Componentrs/AuthPages/Signup.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<App/>}/>
    <Route path="/login" element={<Login/>}/> 
    <Route path="/signup" element={<Signup/>}/>
  </Routes>
    <App />
  </BrowserRouter>
);
