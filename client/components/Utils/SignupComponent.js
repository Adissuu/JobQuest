import { useState, useEffect } from 'react';
import { signup, isAuth, signin } from '../../actions/auth';
import Image from 'next/image'
import signupImg from '@/public/Signin-up/Signup_img.png';
import Router from 'next/router';
import Link from 'next/link';

const SignupComponent = () => {
    const [values, setValues] = useState({

        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        tempRole: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    })
    
    const { name, email, password, confirmPassword, role, tempRole, error, loading, message, showForm } = values;

    // if signed in, no signup/signin pages
    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (tempRole == "Recruiter") { setValues({ ...values, role: 1 }) }
        else { setValues({ ...values, role: 0 }) }
        setValues({ ...values, loading: true, error: false })
        const user = { name, email, password, role }
        signup(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    tempRole: '',
                    error: '',
                    loading: false,
                    message: '',
                    showForm: true
                })
            }
            signin(user).then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                } else {
                    // save user token to cookie
                    // save user info to localstorage
                    // authenticate user
                    authenticate(data, () => {
                        if (isAuth() && isAuth().role == 0) {
                            Router.push(`/profile/crudapplicant`)
                        }
                        else {
                            Router.push(`/profile/crudemployer`)
                        }
                    });
                }
            });
        })
    };

    const handleChange = name => (e) => {
        setValues({ ...values, error: false, [name]: e.target.value });

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
                                    className="dark:text-white pl-2 rounded"
                                    placeholder='User.name'
                                    onChange={handleChange('name')} />

                            <div className="mb-4 ml-2">
                                <label className="block text-gray-700 rounded text-sm font-bold mb-2">Email</label>
                                <input value={email}
                                    type="email"
                                    className="dark:text-white pl-2 rounded"
                                    placeholder='email@email.com'
                                    onChange={handleChange('email')} />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mb-4">
                                <label className="block text-gray-700 rounded text-sm font-bold mb-2">Password</label>
                                <input value={password}
                                    type="Password"
                                    className="dark:text-white pl-2 rounded"
                                    placeholder='••••••••••'
                                    onChange={handleChange('password')} />
                            </div>
                            <div className="mb-6 ml-2">
                                <label className="block text-gray-700 rounded text-sm font-bold mb-2">Confirm Password</label>
                                <input value={confirmPassword}
                                    type="Password"
                                    className="dark:text-white pl-2 rounded"
                                    placeholder='••••••••••'
                                    onChange={handleChange('confirmPassword')} />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 rounded text-sm font-bold mb-2">Choose Your Class</label>
                            <select className="dark:text-white pl-2 w-full rounded"
                                onChange={handleChange('tempRole')}>
                                <option>Job Seeker</option>
                                <option>Recruiter</option>
                            </select>
                        </div>
                        <button className="bg-green-500 shadow-md hover:shadow-sm text-white font-semibold py-2 px-4 rounded w-full">
                            Start Your Quest
                        </button>
                    </form>
                    <Image src={signupImg} className="ml-4 w-80 h-80 rounded-r" alt="signup-img" />
                </div>
            </>
        );
    }

    return (
        <div>
            {showForm && signupForm()}
        </div>
    )
};

export default SignupComponent;