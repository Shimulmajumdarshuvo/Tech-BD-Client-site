import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from "../../firebase.init";

import axios from 'axios';

const AddItem = () => {

    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const url = `https://shrouded-springs-63285.herokuapp.com/service`;
        await axios.post(url, data);




    }

    return (
        <div className='w-50 mx-auto'>
            <h1>Item Added</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("review")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Email' value={user?.email} type="email" {...register("email")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value='Add Item' />
            </form>

        </div>
    );
};

export default AddItem;