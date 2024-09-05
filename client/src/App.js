import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import OnePost from './components/OnePost';
import Create from './components/Create';
import Update from './components/Upadate';
const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [posts, setPosts] = useState([]);
 
// console.log("tokeeeeeeeeeeeeen",token);


  const fetchPosts = () => {
    
    axios.get("http://localhost:3100/api/posts/getAll")
    .then((response)=>{
    console.log("aymennnn",response)
    setPosts(response.data)
    })
  .catch((err)=>{
    console.log(err)
  })
    
    };
    useEffect(() => {


      fetchPosts();
    }, []);

    console.log("hahaha",posts)



  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home posts={posts}/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/onepost" element={<OnePost />} />
        <Route path="/signup" element={<Signup  />} />
        <Route path="/create" element={<Create  />} />
        <Route path="/update" element={<Update  />} />

      </Routes>
    </Router>
  );
};

export default App;
