import { useEffect } from "react";
import M from "materialize-css";
import parallaxImage1 from '../images/about-feature-1-1.jpg'
import "materialize-css/dist/css/materialize.min.css";


const Parallax = () => {

    useEffect(() => {
        let elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems);
    }, [])
    return (
        <div>
            <div className="parallax-container">
                <div class="row center">
                    <h3 class="header col s12 light text-dark ">GENEC ELECTRIX</h3>
                </div>
                <div className="parallax"><img src={parallaxImage1} alt="Parallax_1" /></div>
            </div>
            <div className="container">
                <h4>Featured Projects</h4>
                <div className="section"></div>
                <div class="row">
                    <div class="col s12 l4">
                        <img src={parallaxImage1} alt="" class="responsive-img materialboxed" />
                    </div>
                    <div class="col s12 l6 offset-l1">
                        <h2 class="indigo-text text-darken-4">Electrical Project Management</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 l4 offset-l1 push-l7">
                        <img src={parallaxImage1} alt="" class="responsive-img materialboxed" />
                    </div>
                    <div class="col s12 l6 offset-l1 pull-l5 right-align">
                        <h2 class="indigo-text text-darken-4">Installation of Air conditioning equipments</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                    </div>
                </div>
                <div class="row"></div>
            </div>
            <div className="parallax-container">
                <div className="parallax"><img src={parallaxImage1} alt="Parallax_1" /></div>
            </div>
        </div>
    );
}

export default Parallax;