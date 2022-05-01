import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
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
                    <p>01303461237</p></div>
                <div>fgh</div>


            </div>


            <div className='text-center'><p >Copy Right<small><span>&copy;</span>
                Developer Shimul Majumdar. {new Date().getUTCFullYear()}</small></p>

                <FontAwesomeIcon icon={faCoffee} />
                <FontAwesomeIcon icon={faLaptop} />
                <FontAwesomeIcon icon={faFacebook} />

            </div>


        </div>
    );
};

export default Footer;