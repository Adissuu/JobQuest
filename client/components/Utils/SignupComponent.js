import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';

const SignupComponent = () => {
    const [values, setValues] = useState({
        name: 'Hello',
        email: 'grmeiger',
        password: 'greomgfdlk',
        confirmPassword: 'gmrepmfd',
        error: '',
        loading: false,
        message: '',
        showForm: true
    })

    const { name, email, password, confirmPassword, error, loading, message, showForm } = values;


    const handleSubmit = (e) => {
        // e.preventDefault();
    };


    const signupForm = () => {
        return (
            <div className="bg-white dark:bg-green-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className=''>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input value={name}
                            type="text"
                            className="" readOnly />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input value={email}
                            type="email"
                            className="" readOnly />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input value={password}
                            type="Password"
                            className="" readOnly />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                        <input value={confirmPassword}
                            type="Password"
                            className="" readOnly />
                    </div>
                    <div className='flex justify-center'>
                        <button className="">Sign Up</button>
                    </div>
                </form>
            </div>

        );
    }

    return (
        <>
            {showForm && signupForm()}
        </>
    )
};

export default SignupComponent;