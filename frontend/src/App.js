import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import CookieParser from "react-cookie-consent";
import HomePage from "./Components/Pages/HomePage/HomePage";
import About from "./Components/Pages/About/About";
// import Services from "./Components/Pages/Services/Services";
import Contact from "./Components/Pages/Contact/Contact";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./context/userContext";
import Daschboard from "./Components/Pages/Dashboard/Dashboard";
import ShoppingCart from "./Components/Pages/ShoppingCart/ShoppingCart";
import WhishList from "./Components/Pages/WhishList/WhishList";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = "true";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/daschboard" element={<Daschboard />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/whishlist" element={<WhishList />} />
        </Routes>
      </BrowserRouter>
      {/* <CookieParser
        debug={true}
        location="bottom"
        style={{ background: "#000", textAlign: "left", fontFamily: "poppins" }}
        buttonStyle={{ color: "#000", background: "#fff", fontSize: "14px" }}
        buttonText="Accept"
        expires={1}>
        This site uses cookies. See our{" "}
        <Link className="text-purple-500 hover:text-purple-300" to="/privacy">
          private policy
        </Link>{" "}
        for more.
      </CookieParser> */}
    </UserContextProvider>
  );
}

export default App;
