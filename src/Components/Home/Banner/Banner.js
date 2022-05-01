import React from 'react';
import mackbook from '../../../images/mackbook.png';
import './Banner.css';


const Banner = () => {
    return (
        <div className='banner'>
            <div className='left'>
                <center>
                    <h3>Best Desktop PC Shop in Bangladesh</h3>
                    <p><span>Star tech is the largest and most reliable Laptop
                        Brand Shop in BD. It does not matter whether you want a gaming laptop, an Intel-powered laptop, or an AMD Ryzen laptop for your work, gaming, freelancing, or study. We have covered all of the budget range for laptops. You can also buy a genuine official Apple Macbook Air or Macbook Pro laptop from our shop. Star Tech is currently selling the latest models of many well-known Laptop computer brands such as Razer, HP, Dell, Apple Macbook, Asus, Acer, Lenovo.</span></p>


                    <button>Search</button>
                </center>
            </div>
            <div className='right'>
                <img src={mackbook} alt="" />
            </div>
        </div>
    );
};

export default Banner;