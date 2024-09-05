
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
const Navigate=useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    Navigate("/login")
  };
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">Home</Link>
        <div>
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/signup" className="mr-4">Sign Up</Link>
          <Link to="/create" className="mr-4">Add a post</Link>
          <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
