import React from 'react';
import Feature from '../Feature/Feature';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Feature></Feature>
        </div>
    );
};

export default Home;