import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../Card/Card';
import useProducts from '../../Hooks/UseCart';
import './Inventory.css';

const Inventory = () => {
    const [products] = useProducts();
    console.log(products);
    console.log('jkehfgerg');
    return (
        <div>

            <div>
                <h1>Inventory</h1>

                <div className="products">


                    {
                        products.slice(0, 6).map(product => <Card
                            key={product.id}
                            product={product}

                        ></Card>)
                    }
                </div>

            </div>
            <div className='btn-part'>
                <Link to="/allinventory">
                    <button className='button' >
                        Manage Inventory ->
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Inventory;