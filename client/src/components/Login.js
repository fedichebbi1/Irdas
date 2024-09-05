
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ()=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  const Navigate=useNavigate()

  const handleLogin = (tokenn) => {
    localStorage.setItem('token', tokenn);
    setToken(tokenn);
  };

  const handleLoginUser = async (e,obj) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:3100/api/user/login",obj);
      const { token } = response.data;
      console.log("response.data",response.data);
      
      handleLogin(token); 
      Navigate('/'); 
    } catch (error) {
      // alert('Login failed. Please check your credentials.');
      console.log(error);
      
    }
  };



  return (
    <div className="container mx-auto p-4">
      <form onSubmit={(e)=>handleLoginUser(e,{password,username})} className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
       
        <input
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
