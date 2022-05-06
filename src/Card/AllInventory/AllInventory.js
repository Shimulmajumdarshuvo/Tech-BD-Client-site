import React from 'react';
import useProducts from '../../Components/Hooks/UseCart';

import InventoryCard from '../InventoryCard/InventoryCard';

const AllInventory = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2 className='text-center text-info p-3'>All Inventory</h2>
            <div className="products">
                {products.map(product => <InventoryCard
                    key={product._id}
                    product={product}
                ></InventoryCard>)}
            </div>
        </div>
    );
};

export default AllInventory;