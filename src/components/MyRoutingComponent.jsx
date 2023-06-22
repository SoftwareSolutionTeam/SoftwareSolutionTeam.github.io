import Home from "./ui/Home";
import About from "./ui/About";
import Header from "./ui/Header";
import Navigation from "./ui/Navigation";
import Footer from "./ui/Footer";
import Section from "./ui/Section";
import { Routes, Route } from "react-router-dom";
import React from "react";

function MyRoutingComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default MyRoutingComponent;
