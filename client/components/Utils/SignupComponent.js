import { useState, useEffect } from 'react';
import Image from 'next/image'
import signupImg from '@/public/Signin-up/Signup_img.png';
import Router from 'next/router';
import Link from 'next/link';

const SignupComponent = () => {
    const [values, setValues] = useState({
        name: 'User.name',
        email: 'email@email.com',
        password: 'greomgfdlk',
        confirmPassword: 'greomgfdlk',
        type: "Recruiter",
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
            <>
                <div className="bg-white dark:bg-green-500 dark:text-black-100 shadow-md rounded pl-8 flex">
                    <form onSubmit={handleSubmit} className="max-w-md mt-4">
                        <h1 className='text-center text-2xl font-bold'>Sign up</h1>
                        <div className="flex">
                            <div className="mb-4">
                                <label className="block text-gray-700 rounded text-sm font-bold mb-2">Name</label>
                                <input value={name}
                                    type="text"
                                    className="dark:text-white pl-2" readOnly />
                            </div>
                            <div className="mb-4 ml-2">
                                <label className="block text-gray-700 rounded text-sm font-bold mb-2">Email</label>
                                <input value={email}
                                    type="email"
                                    className="dark:text-white pl-2" readOnly />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mb-4">
                                <label className="block text-gray-700 rounded text-sm font-bold mb-2">Password</label>
                                <input value={password}
                                    type="Password"
                                    className="dark:text-white pl-2" readOnly />
                            </div>
                            <div className="mb-6 ml-2">
                                <label className="block text-gray-700 rounded text-sm font-bold mb-2">Confirm Password</label>
                                <input value={confirmPassword}
                                    type="Password"
                                    className="dark:text-white pl-2" readOnly />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 rounded text-sm font-bold mb-2">Choose Your Class</label>
                            <select className="dark:text-white pl-2 w-full rounded">
                                <option>Job Seeker</option>
                                <option>Recruiter</option>
                            </select>
                        </div>
                        <button className="bg-green-500 shadow-md hover:shadow-sm text-white font-semibold py-2 px-4 rounded w-full" type="button">
                            Start Your Quest
                        </button>
                    </form>
                    <Image src={signupImg} className="ml-4 w-80 h-80 rounded-r" alt="signup-img" />
                </div>
            </>
        );
    }

    return (
        <div className=''>
            {showForm && signupForm()}
        </div>
    )
};

export default SignupComponent;