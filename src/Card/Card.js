import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Card.css'

const Card = (props) => {
    const { _id, name, img, review, price, quantity, suplier } = props.product;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='card-component'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{review}</p>
            <p> Price: $ {price}</p>
            <p> Quantity : {quantity}</p>
            <p> Suplier Name : {suplier}</p>

            <div className='btn-part'>

                <button className='button' onClick={() => navigateToServiceDetail(_id)}>
                    Update Stoke
                </button>

            </div>

        </div>
    );
};

export default Card;