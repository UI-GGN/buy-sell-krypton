import React from "react";
import NavBar from "./NavBar";
import "./App.css";
import ProductSlideshow from "./ProductSlideshow";
import Product from "./Product";
import Marquee from "./Marquee";
import Product2 from "./Product2";

function App() {
  return (
    <div>
      <NavBar />
      <ProductSlideshow />
      <Marquee />
      <Product />
      <Product2 />
    </div>
  );
}

export default App;
