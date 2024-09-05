import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';

const OnePost = () => {
    const Navigate=useNavigate()
    const handleClick1 = (post) => {
        Navigate("/update",{state:{
          element:post
        }});
    }
    const location=useLocation()
    console.log("location",location);
    
  const [post, setPost] = useState({});
  const fetchPost = (id) => {
    
    axios.get(`http://localhost:3100/api/posts/getone/${location.state.element.id}`)
    .then((response)=>{
    setPost(response.data)
    })  
  .catch((err)=>{
    console.log(err)
  })
    
    }
    const deletePost = (id) => {
        
            axios.delete(`http://localhost:3100/api/posts/${id}`)
            .then((response)=>{
            console.log(response)
            })  
          .catch((err)=>{
            console.log(err)
          })
           
            }; 
            
    useEffect(() => {


      fetchPost();
    }, []);

console.log("oneeeeepost",post)

  return (
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
        <div key={post.id} className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-700 mb-4">{post.description}</p>
          <div className={`text-sm ${post.expiredAt ? 'text-red-500' : 'text-green-500'}`}>
            {post.expiredAt ? 'Expired' : 'Active'}
          </div>
        </div>
    </div>
    <button onClick={()=>deletePost(post.id)} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Delete</button>
    <button onClick={()=>{handleClick1(post)}} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Update</button>
  </div>
  );
};

export default OnePost;
