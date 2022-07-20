import React from "react";
import NavBar from "./NavBar";
import "./App.css";
import ProductSlideshow from "./ProductSlideshow";
import Marquee from "./Marquee";
import Product from "./Product";

function App() {
  return (
    <div>
      <NavBar />
      <ProductSlideshow />
      <Marquee />
      <Product/>
    </div>
  );
}

export default App;
