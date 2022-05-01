import React from 'react';
import useProducts from '../../Components/Hooks/UseCart';
import Card from '../Card';

const AllInventory = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2>All Inventory</h2>
            <div className="products">

                {
                    products.map(product => <Card
                        key={product.id}
                        product={product}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default AllInventory;