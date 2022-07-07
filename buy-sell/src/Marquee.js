import React, {Component} from "react";
import './marquee.css';


class Marquee extends Component
{
    render()
    {
        return(
            <div class="blink">
                    <marquee >!!! products on discount !!! Incredible Deals !!! Most Loved Brands !!!</marquee>
            </div>
        )
    }
}

export default Marquee;