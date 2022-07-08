
import React, {Component} from "react";
import './Product.css';

class Product2 extends Component
{
    render()
    {
        return(
            <section className="product-list-base">
                
                <div className="product-base-1">
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16038132/2021/11/9/ce0d12a4-50c9-47e8-8e2d-cfa2ef4805481636446793617RedTapeMenBlack1.jpg" 
                    alt="watch" width="100%"></img>

                        <p>Red tape shoe</p>
                        <h4>Rs 1520</h4>
                    
                    
                </div>

                <div className="product-base-2">
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2466430/2019/2/5/3fc19a1d-4d1b-483d-9671-bc1601eaa7d51549348453281-Daniel-Klein-Premium-Men-Coffee-Brown-Analogue-Watch-DK11599-1.jpg" 
                    alt="watch" width="100%"></img>
                    
                        <p>Daniel Klein</p>
                        <h4>Rs 5.0</h4>
                    
                    
                </div>

                <div className="product-base-3">
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15119108/2021/12/15/605c699d-422d-42ac-bb61-6e83952680cc1639558321006-Puma-Men-Olive-Green-Solid-Lightweight-Padded-Jacket-8381639-7.jpg" 
                    alt="watch" width="100%"></img>
                    
                        <p>Puma jacket</p>
                        <h4>Rs 29999 only</h4>
                </div>

            </section>

        
        )
    }
}

export default Product2;