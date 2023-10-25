import React from 'react';
import Header from '../layouts/Header';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
        <Header></Header>
        <div className='max-h-screen flex justify-center items-center'>
            <div>
                <img src="https://i.ibb.co/gMNXXqP/image.png" alt="" />
               <div className='flex justify-center my-3 '>
               <Link to='/'>
                <button className='text-center bg-purple-600 text-white px-3 py-2 rounded-md'>
                    Back To Home
                </button>
                </Link>
               </div>
            </div>
        </div>
        </>
    );
};

export default Error;