import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLaptop, faDesktop, faHeadphones, faComputerMouse, faKeyboard, faMicrochip,
    faMicrophone, faCamera, faVideoCamera, faRoute, faPrint,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Feature.css';


const Feature = () => {
    return (
        <div>
            <div className='Title'>
                <h2>Featured Category</h2>
                <p><span>Get Your Desired Product from Featured Category!</span></p>
            </div>
            <div className='main'>
                <div className='feature  '>
                    <FontAwesomeIcon icon={faLaptop} />
                    <h5>Laptop</h5>
                </div>
                <div className='feature '>
                    <FontAwesomeIcon icon={faDesktop} />
                    <h5>Desktop</h5>
                </div>
                <div className='feature '>
                    <FontAwesomeIcon icon={faHeadphones} />
                    <h5>HeadPhon</h5>
                </div>
                <div className='feature '>
                    <FontAwesomeIcon icon={faComputerMouse} />
                    <h5>Computer Mouse</h5>
                </div>
                <div className='feature '>
                    <FontAwesomeIcon icon={faKeyboard} />
                    <h5>Keyboard</h5>
                </div>
                <div className='feature '>
                    <FontAwesomeIcon icon={faMicrochip} />
                    <h5>Micro Chip</h5>
                </div>
                <div className='feature '>
                    <FontAwesomeIcon icon={faMicrophone} />
                    <h5>Micro Phon</h5>
                </div>
                <div className='feature  '>
                    <FontAwesomeIcon icon={faCamera} />
                    <h5>Camera</h5>

                </div>
                <div className='feature  '>
                    <FontAwesomeIcon icon={faVideoCamera} />
                    <h5>Video Camera</h5>

                </div>

                <div className='feature  '>
                    <FontAwesomeIcon icon={faPrint} />
                    <h5>Printer</h5>

                </div>





            </div>
        </div>
    );
};

export default Feature;