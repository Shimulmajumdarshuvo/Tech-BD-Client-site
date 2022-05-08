
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [item, setItem] = useState([]);
    const { load, serLoad } = useState(false);

    useEffect(() => {

        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myItems?email=${email}`;
            const { data } = await axios.get(url)
            setItem(data);
        }
        getItems();

    }, [load])
    return (
        <div>
            <h2>My Item : {item.length}</h2>


        </div>
    );
};

export default MyItem;