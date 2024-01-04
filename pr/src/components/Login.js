import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import backgroundImage from '../image/86389.jpg';


function Login() {
  const navigate = useNavigate();
  const {login} = useAuth();
  const user1 = {
    username: 'cashier',
    password: 'cashier',
  }
  const user2 = {
    username: 'admin',
    password: 'admin'
  }
  const[formData, setFormData] = useState({
    username: '',
    password:'',
  })
    
    const handleChange = (e)=>{
      setFormData ({
        ...formData,
        [e.target.name]:e.target.value,
      });
    }
    

    const handleLogin = (e) => {
      e.preventDefault();
      const { username, password } = formData;
    
      // Check if the entered username and password match either user1 or user2
      if (
        (username === user1.username && password === user1.password) ||
        (username === user2.username && password === user2.password)
      ) {
        alert(username + " logged in successfully");
        login();
        navigate("/product");
      } else {
        alert("Invalid username or password");
      }
    
      // to clear form
      setFormData({
        username: '',
        password: '',
      });
    };
    
  


  return (
    
    <div className='flex items-center  justify-center h-screen'
       style={{
         backgroundImage:`url(${backgroundImage})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundAttachment: 'fixed',


        }}
    
    >
    <form onSubmit={handleLogin} 
      className='bg-slate-200 shadow-md rounded px-8 pt-4 pb-8 mb-4'>
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
          placeholder=' Enter username: admin ' 
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
         placeholder='admin' 
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