import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

import React from 'react'

export default function SignUp() {
  return (
 
    <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/* left */}
      <div className='flex-1'>
        <Link to='/' className='font-bold dark:text-white text-4xl'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Spark
          </span>
          Blog
        </Link>
        <p className='text-sm mt-5'>
          You can sign up with your email and password
          or with Google.
        </p>
      </div>
      {/* right */}

      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
          <div>
            <Label value='Your username' />
            <TextInput type='text' placeholder='Username' id='username' />
          </div>
          <div>
            <Label value='Your email' />
            <TextInput type='text' placeholder='name@company.com' id='email' />
          </div>
          <div>
            <Label value='Your password' />
            <TextInput type='text' placeholder='Password' id='password' />
          </div>
          <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" type='submit'>
            Sign Up
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  </div>
);
}