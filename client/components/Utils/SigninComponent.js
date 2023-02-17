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
                className="w-full rounded dark:text-white pl-2" readOnly />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Password</label>
              <input value={password}
                type="Password"
                className="w-full rounded dark:text-white pl-2" readOnly />
            </div>

            <div className="flex items-center justify-between">
              <button className="bg-green-500 shadow-md hover:shadow-sm text-white font-semibold py-2 px-4 rounded" type="button">
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

export default SigninComponent;