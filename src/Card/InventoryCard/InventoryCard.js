import axios from 'axios';
import React from 'react';

import './InventoryCard.css';

const InventoryCard = (props) => {
    const { _id, name, img, review, price, quantity, suplier } = props.product;
    const { products, load, setLoad, setProducts } = props;


    const handleUserDelete = async (id) => {
        const proceed = window.confirm('Are you sure want to detete? ');

        if (proceed) {

            const url = `https://shrouded-springs-63285.herokuapp.com/service/${id}`;

            await axios.delete(url);
            const remaining = products.filter(pd => pd._id !== id)
            setProducts(remaining);
            setLoad(!load)

        }

    }
    return (
        <div>
            <div className='card-component'>

                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>{review}</p>
                <p> Price: $ {price}</p>
                <p> Quantity : {quantity}</p>
                <p>Suplier Name: {suplier}</p>

                <button onClick={() => handleUserDelete(_id)}>Delete</button>

            </div>


        </div>
    );
};


export default InventoryCard;