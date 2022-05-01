import React from 'react';
import './Card.css'

const Card = (props) => {
    const { name, img, review, ratings, } = props.product;
    console.log(name);
    return (


        <div className='card-component'>

            <img src={img} alt="" />
            <h4>Name:{name}</h4>
            <p>{review}</p>
            <p> Rating: $ {ratings}</p>

        </div>
    );
};

export default Card;