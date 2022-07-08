
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
                    alt="watch" width="100%"></img>

                        <p>Analogue watch</p>
                        <h4>Rs 3500</h4>
                    
                    
                </div>

                <div className="product-base-2">
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16685220/2022/1/4/42811460-3834-4e9b-95a5-e76ee398b51c1641308301084RedTapeMenBlack1.jpg" 
                    alt="watch" width="100%"></img>
                    
                        <p>Red tape shoe</p>
                        <h4>Rs 2100</h4>
                    
                    
                </div>

                <div className="product-base-3">
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16513990/2022/1/26/d8f01fca-59e2-4f82-8214-9cd61d373be41643184909272-Roadster-Men-White-Sneakers-6661643184908868-1.jpg" 
                    alt="watch" width="100%"></img>
                    
                        <p>Roadster shoe</p>
                        <h4>Rs 2.0</h4>
                </div>

            </section>

        
        )
    }
}

export default Product;