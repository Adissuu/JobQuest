import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';

const SigninComponent = () => {
  const [values, setValues] = useState({
    email: 'email@gmail.com',
    password: 'thisIsNotTheSafestPassword',
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
      <>

        <div className="bg-white dark:bg-green-500 dark:text-black-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 z-10 flex">
          <form onSubmit={handleSubmit} className="min-w-max">
            <h1 className='text-center text-2xl font-bold'>Log In</h1>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input value={email}
                type="email"
                className="w-full rounded text-white pl-2" readOnly />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Password</label>
              <input value={password}
                type="Password"
                className="w-full rounded text-white pl-2" readOnly />
            </div>

            <div className="flex items-center justify-between">
              <button className="bg-green-500 hover:shadow-md text-white font-semibold py-2 px-4 rounded" type="button">
                Log In
              </button>
              <Link className='ml-4 inline-block align-baseline font-bold text-sm hover:text-green-500 dark:hover:text-white' href="/">Forgot Password?</Link>
            </div>
          </form>
          <div className='ml-4 font-medium text-center'>
            Our adventurer returns for their job seeking journey, equipped with skills and ready for a new challenge. Their determined mindset leads the way.
          </div>
        </div>
      </>
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