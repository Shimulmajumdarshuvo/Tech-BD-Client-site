import React from 'react';

import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import './SocialLogin.css'


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error || error1) {

        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>

    }


    if (user || user1) {

        navigate('/home');

    }


    return (
        <div>
            <div>
                <div className='d-flex align-items-center'>
                    <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                    <p className='mt-2 px-2'>or</p>
                    <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                </div>
                {errorElement}
                <div className='social'>
                    <button
                        onClick={() => signInWithGoogle()}


                        className='btn btn-info w-30 mx-auto my-2 d-block '>
                        {/* <img style={{ width: '25px' }} src={google} alt="" /> */}
                        <span className='px-2'> Google</span>
                    </button>
                    <button



                        className='btn btn-info w-30 mx-auto my-2 d-block '>
                        {/* <img style={{ width: '25px' }} src={facebook} alt="" /> */}
                        <span className='px-2'> facebook</span>
                    </button>
                    <button
                        onClick={() => signInWithGithub()}


                        className='btn btn-info w-30 mx-auto my-2 d-block'>
                        {/* <img style={{ width: '25px' }} src={github} alt="" /> */}
                        <span className='px-2'> Github</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SocialLogin;