import banner1 from '../images/banner-1-1.jpg'
import banner2 from '../images/banner-1-2.jpg'
import banner3 from '../images/banner-2-1.jpg'
import banner4 from '../images/banner-2-3.jpg'

import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class CarouselSpecial extends Component {

    componentDidMount() {
        
        // M.Carousel.init(options);
        // M.AutoInit()


        // document.addEventListener('DOMContentLoaded', function () {
            const options = {
                duration: 20,
                fullWidth: true,
                indicators: true,
                dragged: true
            };

            var elems = document.querySelectorAll('.carousel');
             M.Carousel.init(elems, options);
            // instance.shift(0)
            
            M.AutoInit()

        // });



    }

    render() {
        return (

            
            <div  className="carousel carousel-slider center no-autoinit" >
                <div className="carousel-fixed-item center">
                    <a href="/" className="btn waves-effect red darken-1 white-text darken-text-2 ">Genec</a>
                </div>

                <div className="carousel-item red white-text" href="#one!">
                    <img src={banner1} alt="carousel" />
                    <h2>First Panel</h2>
                    <p className="white-text">This is your first panel</p>
                </div>
                <div className="carousel-item amber white-text" href="#two!">
                    <img src={banner2} alt="carousel" />
                    <h2>Second Panel</h2>
                    <p className="white-text">This is your second panel</p>
                </div>
                <div className="carousel-item green white-text" href="#three!">
                    <img src={banner3} alt="carousel" />
                    <h2>Third Panel</h2>
                    <p className="white-text">This is your third panel</p>
                </div>
                <div className="carousel-item blue white-text" href="#four!">
                    <img src={banner4} alt="carousel" />
                    <h2>Fourth Panel</h2>
                    <p className="white-text">This is your fourth panel</p>
                </div>
            </div>


        );
    }
}

export default CarouselSpecial


