import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useForgotPassword from '../../hooks/useForgotPassword'; 

const index = () => {
    const { forgotPassword } = useForgotPassword();
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await forgotPassword(email);
            
        } catch (error) {
            
            console.error("Error in sending email:", error.message || error);
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <h1 className='text-white text-3xl'>Enter your Email</h1>
                <input
                    type="email"
                    className='p-2 min-w-md rounded-lg'
                    placeholder='Your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className='text-sm m-auto text-white hover:text-yellow-600 underline'>
                    <Link to='/'>Enter your login details..</Link>
                </p>
                <button
                    type='submit'
                    className='min-w-md rounded-lg p-2 border border-collapse bg-green-700 text-white'
                >
                    Send Mail
                </button>
            </form>
        </div>
    );
};

export default index;
