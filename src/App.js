import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Footer from "./Footer";
import "animate.css";
import "@material-tailwind/react/tailwind.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Login />
      <Footer />
    </div>
  );
};

export default App;
