import React from 'react';
import './InventoryCard.css';

const InventoryCard = (props) => {
    const { name, img, review, price, quantity } = props.product;
    return (
        <div>
            <div className='card-component'>

                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>{review}</p>
                <p> Price: $ {price}</p>
                <p> Quantity : {quantity}</p>

                <button>Delete</button>

            </div>

        </div>
    );
};

export default InventoryCard;