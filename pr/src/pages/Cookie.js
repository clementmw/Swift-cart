import React from 'react';
import { Link } from 'react-router-dom';




function Cookie() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <form className='bg-slate-200 shadow-md rounded px-8 pt-4 pb-8 w-96'>
        <div>
          <img
            className='w-20 h-20 rounded-full mx-auto mb-4'
            src='https://static.vecteezy.com/system/resources/previews/011/559/743/original/cookies-icon-logo-illustration-chocolate-chip-cookies-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg'
            alt='cookie'
          />
        </div>

        <div className='mb-4 text-center'>
          <p>
            By clicking 'Accept All Cookies', you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts{' '}
            <Link to="" className='hover:underline text-blue-400'>More info</Link>
          </p>
        </div>

        <div className='flex items-center justify-center'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
            type='submit'
            value='submit'
          >
            Accept All Cookies
          </button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2'>
            Decline Cookie
          </button>
        </div>
        <div className='text-center mt-4 hover:underline text-blue-500'>
          <Link to="">Cookie Setting</Link>
        </div>
      </form>
    </div>
  );
}

export default Cookie;
