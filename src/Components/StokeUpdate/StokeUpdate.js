import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './StokeUpdate.css';

const StokeUpdate = () => {
    const { serviceId } = useParams();

    const [service, setService] = useState({});





    useEffect(() => {
        const url = `https://shrouded-springs-63285.herokuapp.com/service/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data);
            });
    });


    const handleQuantity = async (id) => {

        const newQuantity = service?.quantity - 1;
        const url = `https://shrouded-springs-63285.herokuapp.com/service/${id}`;
        await axios.put(url, { newQuantity })

    };


    const formQunatity = async (e) => {

        e.preventDefault();

        const stock = parseInt(e.target.stock.value);
        const newQuantity = service?.quantity + stock;
        const url = `https://shrouded-springs-63285.herokuapp.com/service/${service?._id}`;
        await axios.put(url, { newQuantity });
        e.target.reset();


    }

    return (
        <div >
            <div className='add-card'>



                <div >
                    <img src={service.img} alt="" />
                </div>
                <div>
                    <h2> {service?.name}</h2>
                    <p>{service.review}</p>
                    <p>Price : {service.price}</p>
                    <p> Quantity : {service.quantity}</p>
                    <p>Suplier Name : {service.suplier}</p>


                    <div className='btn-part'>
                        <button onClick={() => handleQuantity(service?._id)}>Delivered</button>

                    </div>

                    <form onSubmit={formQunatity} >

                        <input className='btn-part' name='stock' type="text" placeholder='Restock Quantity' required />

                        <button type='submit'>Restock</button>
                    </form>

                </div>


            </div>
            <div className='btn-part'>
                <Link to="/allinventory">
                    <button className='button' >
                        Manage Inventory
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default StokeUpdate;