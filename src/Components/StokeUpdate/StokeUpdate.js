import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './StokeUpdate.css';

const StokeUpdate = () => {
    const { serviceId } = useParams();

    const [service, setService] = useState({});





    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data);
            });
    });


    const handleQuantity = async (id) => {

        const newQuantity = service?.quantity - 1;
        const url = `http://localhost:5000/service/${id}`;
        await axios.put(url, { newQuantity })

    };
    const handleRestockValue = async (id) => {

        console.log(id);
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



                    <input className='btn-part' type="text" placeholder='Restock Quantity' />
                    <button onClick={() => handleRestockValue(service?._id)}>Restock</button>
                </div>
            </div>

        </div>
    );
};

export default StokeUpdate;