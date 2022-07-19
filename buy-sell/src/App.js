import React from "react";
import NavBar from "./NavBar";
import "./App.css";
import ProductSlideshow from "./ProductSlideshow";
import Marquee from "./Marquee";
import Product1 from "./Product1";

function App() {
  return (
    <div>
      <NavBar />
      <ProductSlideshow />
      <Marquee />
      <Product1/>
    </div>
  );
}

export default App;
