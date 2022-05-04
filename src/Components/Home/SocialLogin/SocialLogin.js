import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
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


                        className='  mx-auto  d-block social-part'>

                        <span className='px-2'><FontAwesomeIcon icon={faGoogle} /> </span>
                    </button>
                    <button

                        className='  mx-auto  d-block social-part '>

                        <span className='px-2'> <FontAwesomeIcon icon={faFacebook} /> </span>

                    </button>
                    <button
                        onClick={() => signInWithGithub()}


                        className='  mx-auto  d-block social-part'>

                        <span className='px-2'><FontAwesomeIcon icon={faGithub} /> </span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SocialLogin;