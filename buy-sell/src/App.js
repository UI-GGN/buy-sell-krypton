import React from "react";
import NavBar from "./NavBar";
import "./App.css";
import ProductSlideshow from "./ProductSlideshow";
import Product from "./Product";
import Marquee from "./Marquee";

function App() {
  return (
    <div>
      <NavBar />
      <ProductSlideshow />
      <Marquee />
      <Product />
    </div>
  );
}

export default App;
