
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function TemporaryPage({ title }) {
  return (
    <h2 style={{ textAlign: "center", padding: "50px" }}>
      {title} - Coming Soon
    </h2>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/products"
            element={<TemporaryPage title="Products" />}
          />

          <Route
            path="/cart"
            element={<TemporaryPage title="Cart" />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
