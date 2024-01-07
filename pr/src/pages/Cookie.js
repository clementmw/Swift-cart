import React, { useState } from 'react';
import { Link } from 'react-router-dom';




function Cookie() {
  const [isVisible, setIsVisible] = useState(true);
  
  const handleClick  = (e)=>{
    e.preventDefault();

  }
  const toggle = ()=>{
    setIsVisible((isVisible) => !isVisible) // at first its visible (true) else its false not visible 
  }
  

  return (
    <div className='bg-slate-200'>

      {isVisible ? // if true it shows the whole div 
    <div className='flex items-centre justify-center py-5'>
      
        <form className='bg-blue-600 rounded-2xl flex items-centre w-1/2 py-4 '> 
          <div> 
            <p className='text-white text-center'>  We are now part of Saleforce. <Link to="#" className='hover:underline'>Learn why we're even better together</Link></p>
          </div>
          <div className='ml-auto'>
          <button onClick= {toggle}  className='rounded-full w-7 h-7 ml-auto bg-white'>x</button>
          </div>
        </form>
      </div>
      // if false it hides the whole div
       : null} 
  
    <div className='flex items-center justify-center h-screen'>
      
      <form onSubmit={handleClick} className='bg-white shadow-md rounded px-8 pt-4 pb-8 w-96'>
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
            className='bg-white hover:bg-stone-100 text-cyan-400 font-bold py-1 px-1 rounded mr-2'
            type='submit'
            value='submit'
          >
            Accept All Cookies
          </button>
          <button className='bg-white hover:bg-stone-100 text-cyan-400 font-bold py-1 px-1 rounded ml-2'>
            Decline Cookie
          </button>
        </div>
        <div className='text-center mt-4 hover:underline text-blue-500'>
          <Link to="">Cookie Setting</Link>
        </div>
      </form>
    </div>

    </div>
  );
}

export default Cookie;
