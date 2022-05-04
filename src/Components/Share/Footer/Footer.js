import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer' >
            <div className='footer-part'>
                <div>
                    <h5>Information</h5>
                    <p>About Us</p>
                    <p>More Search</p>
                    <p>Blog</p>
                    <p>Security</p>
                </div>
                <div>
                    <h5>Our Services</h5>
                    <p>Services</p>
                    <p>Support</p>
                    <p>Terms and Condition</p>
                    <p>Privacy</p>
                </div>
                <div><h5>Contact </h5>
                    <p>shimulmajumdar906@gmail.com</p>
                    <p>01303461237</p>

                    <FontAwesomeIcon icon={faLaptop} />
                    <FontAwesomeIcon icon={faFacebook} />


                </div>
                <div className='w-50 text-center'>

                    <img height={100} width={170} src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="" /> <br />
                    <img height={70} width={150} src="https://www.pyronix.com/uk/wp-content/uploads/sites/4/2021/02/badge-example-preferred_2x.png" alt="" />
                </div>


            </div>


            <div className='text-center'><p >Copy Right<small><span>&copy;</span>
                Developer Shimul Majumdar. {new Date().getUTCFullYear()}</small></p>



            </div>


        </div>
    );
};

export default Footer;