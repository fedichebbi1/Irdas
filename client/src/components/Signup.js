
import React, { useState,useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate=useNavigate()
  const handleLogin = (tokenn) => {
    localStorage.setItem('token', tokenn);
    setToken(tokenn);
  };
  
  const handleSignupUser = async (e,obj) => {
   
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:3100/api/user/register", obj);
      const { token } = response.data;
      handleLogin(token); 
      navigate('/'); 
    } catch (error) {
      // alert('Signup failed. Please try again.');
      console.log(error);
      

    }
  };
  
       return (
    <div className="container mx-auto p-4">
      <form onSubmit={(e)=>handleSignupUser(e,{ username, password,email })} className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <input
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
         <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
