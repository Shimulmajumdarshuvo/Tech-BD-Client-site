import React from 'react';
import './Card.css'

const Card = (props) => {
    const { name, img, review, price, quantity } = props.product;
    console.log(name);
    return (


        <div className='card-component'>

            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{review}</p>
            <p> Price: $ {price}</p>
            <p> Quantity : {quantity}</p>

        </div>
    );
};

export default Card;