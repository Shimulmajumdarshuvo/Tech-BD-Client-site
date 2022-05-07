import React from 'react';
import './InventoryCard.css';

const InventoryCard = (props) => {
    const { _id, name, img, review, price, quantity } = props.product;


    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure want to detete? ');

        if (proceed) {
            console.log('hfjdhjdh', id);
            const url = `http://localhost:5000/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
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

                <button onClick={() => handleUserDelete(_id)}>Delete</button>

            </div>

        </div>
    );
};

export default InventoryCard;