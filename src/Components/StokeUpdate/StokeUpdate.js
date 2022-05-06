import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './StokeUpdate.css';

const StokeUpdate = () => {
    const { serviceId } = useParams();

    const [service, setService] = useState({});
    console.log(service);


    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data);
            });
    });

    return (
        <div className='add-card'>

            <div>
                <img src={service.img} alt="" />
            </div>
            <div>
                <h2> {service?.name}</h2>
                <p>{service.review}</p>
                <p>Price : {service.price}</p>
                <p> Quantity : {service.quantity}</p>


                <div className=''>
                    <button>Deliverd</button>
                    <input type="number" name="" id="" />
                </div>
            </div>


        </div>
    );
};

export default StokeUpdate;