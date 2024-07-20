import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Coin from "./Pages/Coin/Coin";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      {/* <h1>App</h1> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
