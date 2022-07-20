import React from "react";
import { useState } from "react"
import './Product.css';

const Product = () => {
    const [Products ,setProducts] =useState([])

    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  return (

    <>
      <section  >
        <div className="row">
        {Products.map((products) => (
         
            <div className="column">
             <img className="img" src={products.image} alt="product"/>
            
                <p>
                
                    <strong>{products.title}</strong>
                  </p>
                  <p><strong>$ {products.price}</strong></p>
              </div>
              
           
         
        ))}
         </div>
      </section>
    </>
  );
};

export default Product;