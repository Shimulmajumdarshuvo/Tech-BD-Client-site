import React, { useState } from 'react';
import './InventoryCard.css';

const InventoryCard = (props) => {
    const { _id, name, img, review, price, quantity, suplier } = props.product;

    const [services, setServices] = useState({});


    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure want to detete? ');

        if (proceed) {
            console.log('delete product', id);
            const url = `http://localhost:5000/service/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCont > 0) {
                        console.log('deleted');
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining);
                    }
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
                <p>Suplier Name: {suplier}</p>

                <button onClick={() => handleUserDelete(_id)}>Delete</button>

            </div>

        </div>
    );
};


export default InventoryCard;