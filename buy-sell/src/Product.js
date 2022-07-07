
import React, {Component} from "react";
import './Product.css';

class Product extends Component
{
    render()
    {
        return(
            <section className="product-list-base">
                
                <div className="product-base-1">
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2278228/2022/4/19/2451411c-8346-4b8e-b228-e60351d536161650342959173-DressBerry-Women-Mauve-Analogue-Watch-1341650342959089-7.jpg" 
                    alt="watch" width="45%"></img>

                        <p>Women analogue watch</p>
                        <h4>3500</h4>
                    
                    
                </div>

                <div className="product-base-2">
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2278228/2022/4/19/2451411c-8346-4b8e-b228-e60351d536161650342959173-DressBerry-Women-Mauve-Analogue-Watch-1341650342959089-7.jpg" 
                    alt="watch" width="50%"></img>
                    
                        <p>Women analogue watch</p>
                        <h4>3500</h4>
                    
                    
                </div>

                <div className="product-base-3">
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2278228/2022/4/19/2451411c-8346-4b8e-b228-e60351d536161650342959173-DressBerry-Women-Mauve-Analogue-Watch-1341650342959089-7.jpg" 
                    alt="watch" width="50%"></img>
                    
                        <p>Women analogue watch</p>
                        <h4>3500</h4>
                </div>
                
            </section>

        
        )
    }
}

export default Product;