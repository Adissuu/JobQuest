import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { isAuth, authenticate, signin } from '@/actions/auth';

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

  useEffect(() => {
    isAuth() && Router.push(`/`);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false })
    const user = { email, password }

    signin(user).then(data => {
      console.log(data)
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        // save user token to cookie
        // save user info to localstorage
        // authenticate user
        authenticate(data, () => {
          Router.push('/')
        });
      }
    });
  };

  const handleChange = name => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
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
                className="w-full rounded dark:text-white pl-2"
                onChange={handleChange('email')}
                placeholder="email@email.com" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Password</label>
              <input value={password}
                type="Password"
                className="w-full rounded dark:text-white pl-2"
                onChange={handleChange('password')}
                placeholder="••••••••••" />
            </div>

            <div className="flex items-center justify-between">
              <button className="bg-green-500 shadow-md hover:shadow-sm text-white font-semibold py-2 px-4 rounded" type="submit">
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