import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import footerImg  from '../images/genecon.png'

const Footer = () => {
    return (
        <footer className="page-footer  grey darken-3">
            <div className="container ">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text"><img src={footerImg}  height="100px" alt="footer"/></h5>
                        <p className="grey-text text-lighten-4">Our mission is to engage in the electrical construction of residential, commercial, industrial and community projects with efficient and motivated craftsmen to produce very excellent work to meet customer satisfaction..</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Facebook Page</h5>
                        <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">Check out our Facebook Page on the link below. </a></li>
                        <div className="section"></div>
                            <li><div className="container"><a className="center" href="https://www.facebook.com/genecelectrix"><FontAwesomeIcon className ="center" icon={faFacebook} size="1x" />Facebook</a></div></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    {/* {Date.now()} */}
                    © 2020 Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;