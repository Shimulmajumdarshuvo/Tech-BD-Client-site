import React from 'react';
import './ExtraSection.css';

const ExtraSection = () => {
    return (
        <div className='update' >

            <div className='container'>

                <div className='design'>
                    <img src="https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP.jpg" alt="" />
                    <h2>MacBook Pro</h2>
                    <p><span>Apple's laptops are now comprised of a 13-inch MacBook Air and
                        three flavors of MacBook Pro: 13 inches, 14 inches and 16 inches.
                    </span></p>
                </div>
                <div className='design'>
                    <img src="https://www.pricingsolutions.com/wp-content/uploads/2016/01/macbook-pricing.jpg" alt="" />
                    <h2>Apple</h2>
                    <p><span>Last year Apple released their new entry to the laptop market.
                        The MacBook  the best looking Apple laptop
                        they’ve ever produced.</span></p>
                </div>
                <div className='design'>
                    <img src="https://media.istockphoto.com/photos/moscow-russia-july-10-2017-apple-macbook-pro-retina-picture-id816480062?k=20&m=816480062&s=612x612&w=0&h=VYHF25pxCsNJRrTE6p3YbgmFcYeFkOl6iGeafDBeg7Y=" alt="" />
                    <h2>Apple Mack book Air</h2>
                    <p><span>Our thinnest, lightest notebook, completely transformed by the Apple M1
                        chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster.</span></p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;