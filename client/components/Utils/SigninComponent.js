import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';

const SigninComponent = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    })

    const { email, password, error, loading, message, showForm } = values;


    const handleSubmit = (e) => {
        e.preventDefault();
    };


    const signinForm = () => {
        return (
            <><div className="bg-white dark:bg-green-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 z-10">
                <h1 className='text-center text-2xl font-bold'>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Email</label>
                        <input value={email}
                            type="email"
                            className="w-full rounded" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2">Password</label>
                        <input value={password}
                            type="Password"
                            className="w-full rounded" />
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-orange-500 shadow-lg text-white font-bold py-2 px-4 rounded" type="button">
                            Log In
                        </button>
                        <Link className='ml-4 inline-block align-baseline font-bold text-sm hover:text-orange-500 dark:hover:text-gray-200' href="/">Forgot Password?</Link>
                    </div>
                </form>
            </div><svg className='absolute top-1/4 left-1/4 z-20' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFBA7B" d="M40.3,-53.3C51,-39,57.7,-25.2,63.4,-8.8C69.2,7.6,74.1,26.6,66.2,36.2C58.2,45.7,37.5,45.7,21.2,46.5C5,47.3,-6.7,48.9,-19,46.8C-31.3,44.6,-44.3,38.8,-54.8,28C-65.4,17.2,-73.5,1.4,-69.1,-10.1C-64.6,-21.7,-47.5,-29,-33.9,-42.8C-20.3,-56.6,-10.1,-76.9,2.3,-79.6C14.8,-82.4,29.6,-67.6,40.3,-53.3Z" transform="translate(100 100)" />
                </svg></>
        );
    }

    return (
        <>
        <div className='max-w-md'>
            {showForm && signinForm()}
        </div>
        </>
    )
};
{/* <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div> */}

export default SigninComponent;