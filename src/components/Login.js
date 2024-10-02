import React, { useState } from 'react'
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');
  const [error , setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);

  }


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

  }


  const handleSubmit = async (event) =>{
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/account/login', {
        userName: username,
        password: password,

      });

      const user = response.data;
      console.log(user);

      if(user && user.token) {
        localStorage.setItem('token', user.token);
        navigate('/Navbar')
       
      }
      else{
       setError('Invalid username or password');
      }
      }catch(error) {
        console.error('Login error:', error);
      }
    };
  



  return (
    <div className='login-container'>
      <div className='login-form'>
        <form onSubmit={handleSubmit}>

          <input 
          type='text'
          placeholder='Enter your Username'
          className='login-input'
          value={username}
          onChange={handleUsernameChange}
          required
          />

          <div className='password-field'>
            <input
            type='password'
            placeholder='Enter your Password'
            className='login-input'
            value={password}
            onChange={handlePasswordChange}

            required
            />
            </div>
            {error && <h6 className="error-message"> {error}</h6>}
            <div className='login-button-container'>
              <button type='submit' className='login-button'>Login</button>
              </div>
              </form>
          </div>
    </div>
  )
}

export default Login