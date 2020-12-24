import CarouselSpecial from './Carousel';
import styled from 'styled-components';
import aboutFeatureImg from '../images/about-feature-1-1.jpg'
import { useEffect } from "react";
import M from "materialize-css";
import parallaxImage1 from '../images/about-feature-1-1.jpg'
import "materialize-css/dist/css/materialize.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {  } from '@fortawesome/free-solid-svg-icons';
import { faDraftingCompass,faUserFriends,faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

const About = () => {

    const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

    const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
  `;

    useEffect(() => {
        let elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems);
    }, [])
    return (
        <div>
            <CarouselSpecial />
            <div className="section"></div>
            <div className="container">
                <div className="row">

                    <div className="col s4 offset-1">
                        <span>About GENEC</span>
                        <h3>We individually assess each<br />  plan and offer optimal solutions</h3>
                        <p>Services including General Electrical Construction works, Civil Engineering Works, Electrical Project Management,
                    Installation of Air-Conditioning Equipments, Installation of Security Systems and Voice and Data installation Works.</p>
                        <TomatoButton className="waves-effect waves-light">Our Services</TomatoButton>
                    </div>
                    <div className="section"></div>

                    <div className="col s4">
                        <div className="card">
                            <img src={aboutFeatureImg} alt="about" />
                        </div>
                    </div>
                </div>


            </div>
            <div>
                <div className="parallax-container">
                    <div class="row center">
                        <h3 class="header col s12 light text-dark ">GENEC ELECTRIX</h3>
                    </div>
                    <div className="parallax"><img src={parallaxImage1} alt="Parallax_1" /></div>
                </div>
                <div className="container">
                    <h4>Our Strength</h4>
                    <div className="section"></div>
                    <div className="row">

                        {/* left side */}
                        <div className="col s6">
                            <div className="row ">

                                <div className="col s2 ">
                                    <FontAwesomeIcon icon={faTachometerAlt} size="2x" />
                                </div>
                                <div className="col s3">
                                    <p> Speed</p>
                                    <p> We accomplish our tasks within our stipulated periods</p>
                                </div>
                                <div className="row"></div>

                            </div>
                            <div className="row ">

                                <div className="col s2 ">
                                    <FontAwesomeIcon icon={faDraftingCompass} size="2x" />
                                </div>
                                <div className="col s3">
                                    <p>Advanced Technology</p>
                                    <p> GENEC has all the Machines and Equipments neccessary to undertake any job</p>
                                </div>
                                <div className="row"></div>

                            </div>
                            <div className="row ">

                                <div className="col s2 ">
                                    <FontAwesomeIcon icon={faUserFriends} size="2x" />
                                </div>
                                <div className="col s3">
                                    <p>Expert Team</p>
                                    <p> GENEC ELECTRIX consists a group of talented expertees who have long term experiences elctrical and building constructions and many other diverse fields.</p>
                                </div>
                                <div className="row"></div>

                            </div>
                        </div>
                         {/* right side */}
                        <div className="col s6">
                            
                            <div className="row ">

                                <div className="col s2 ">
                                    <FontAwesomeIcon icon={faTachometerAlt} size="2x" />
                                </div>
                                <div className="col s3">
                                    <p>Outstanding Quality</p>
                                    <p> We accomplish our tasks within our stipulated periods</p>
                                </div>
                                <div className="row"></div>

                            </div>

                            <div className="row ">

                                <div className="col s2 ">
                                    <FontAwesomeIcon icon={faTachometerAlt} size="2x" />
                                </div>
                                <div className="col s3">
                                    <p> We accomplish our tasks within our stipulated periods</p>
                                </div>
                                <div className="row"></div>

                            </div>  
                        </div>



                    </div>
                    <div className="section"></div>



                </div>

            </div>

        </div>
    );
}

export default About;