import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import logoIcon from '../../../images/Login-illustration.svg'
import auth from '../../../firebase.init';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        console.log("react");
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);


    }
    return (
        <div className='user'>
            <div className='w-75 image'>
                <img src={logoIcon} alt="" />

            </div>
            <div className='register-form w-50 mx-auto text-white '>
                <h2 >Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Your Name' />

                    <input type="email" name="email" id="" placeholder='Email Address' required />

                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input className='mx-auto btn btn-primary w-50' type="submit" value="Register" />
                </form>
                <p>Already have an account? <Link to="/login" className='text-white pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;