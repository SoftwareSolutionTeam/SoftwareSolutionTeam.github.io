import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./components/ui/Home";
import About from "./components/ui/About";
import Header from "./components/ui/Header";
import Navigation from "./components/ui/Navigation";
import Footer from "./components/ui/Footer";
import RelatedProducts from "./components/ui/products-components/RelatedProducts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="">
      <Navigation />
      <Header />
      <App />
      <RelatedProducts />
      <Footer />
    </div>
    </BrowserRouter>
  </React.StrictMode>
);
