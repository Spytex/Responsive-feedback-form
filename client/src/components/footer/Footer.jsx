import React from 'react';
import './footer.css';
import group80 from "../../assets/group80.svg";
import redCartoon4Footer from "../../assets/redCartoon4Footer.svg";
import redCartoon6 from "../../assets/redCartoon6.svg";
const Footer = () => {
    return(
        <footer>
            <div className="feedback_footer">
                <div className="social-icons">
                        <a href="https://www.linkedin.com/">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>

                        <a href="https://www.twitter.com/">
                            <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                        </a>

                        <a href="https://www.facebook.com/">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>

                        <a href="https://www.pinterest.com/">
                            <i className="fa-brands fa-pinterest-p"></i>
                        </a>
                </div>

                <div className="smiles">
                    <img alt="img" className="group80" src={group80}/>
                    <img alt="img" className="redCartoon4Footer" src={redCartoon4Footer}/>
                    <img alt="img" className="redCartoon6" src={redCartoon6}/>
                    </div>
            </div>
        </footer>
    )
};

export default Footer;