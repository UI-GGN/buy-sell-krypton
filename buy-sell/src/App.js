import React, {Component} from "react";
import NavBar from "./NavBar";
import './App.css';
import ProductSlideshow from "./ProductSlideshow";
import Product from "./Product";
import Marquee from "./Marquee";

 class App extends Component
 {
    
    render(){
        return(
           <div>
            <NavBar />
            <ProductSlideshow />
            <Marquee />
            <Product />
           </div>
        )
    }
 }


 export default App
