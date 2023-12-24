import React, { useState } from 'react'


function Login() {
  const[formData, setFormData] = useState({
    username: '',
    password:'',
  })
    const handleSubmit  = (e)=>{
      e.preventDefault();
        //to clear the form
      setFormData({
        username: '',
        password:'',
    })
        
    }
    const handleChange = (e)=>{
      setFormData ({
        ...formData,
        [e.target.name]:e.target.value,
      });
    }
    console.log(formData)

  


  return (
    <div className='flex items-center  justify-center h-screen'>
    <form onSubmit={handleSubmit} 
      className='bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4'>
      <div>
        <img className='w-20 h-20 rounded-full mx-auto' 
        src='https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=' 
        alt='user-profile'/>
      </div>
      <div className='mb-8'>
        <label className='block text-blue-500 text-sm font-bold mb-2' htmlFor='username'>
           USERNAME
          <input id='username'
          type = 'text' 
          name = 'username' 
          placeholder=' Enter username' 
          value={formData.username} 
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          /> 
        </label>
      </div>

      <div className='mb-8'>
        <label className='block text-blue-500 text-sm font-bold mb-2' htmlFor='password'>
        PASSWORD
        <input
         id = 'password' 
         type = 'password' 
         name = 'password' 
         placeholder=' Enter password' 
         value={formData.password} 
         onChange={handleChange}
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         /> 
        </label>
      </div>
      <div className='mb-8'>
        <label>
        <input id = 'remember-me' type = 'checkbox' name = 'remember-me'/>
        Remember Me
        </label>
      
      </div>
      
      <div className='flex items-center justify-between'>
        <button id = 'login-btn'
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >Login</button>
      </div>
        
        
    </form>
      
    </div>
  )
}

export default Login