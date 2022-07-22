import React from "react";
import { useState } from "react"
import './Product.css';

const Product = () => {
    const [Products ,setProducts] =useState([])

    fetch('https://rest-api-v1-cbp-krypton.herokuapp.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  return (

    <>
      <section  >
        <div className="row">
        {Products.map((products) => (
         
            <div className="column">
             <img className="img" src={products.thumbnail} alt="product"/>
            
                <p>
                
                    <strong>{products.title}</strong>
                  </p>
                  <p><strong>Rs {products.price}</strong></p>
              </div>
              

         
        ))}
         </div>
      </section>
    </>
  );
};

export default Product;