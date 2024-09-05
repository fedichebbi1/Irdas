import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = ({posts}) => {
  const Navigate=useNavigate()
  const handleClick = (post) => {
    Navigate("/onepost",{state:{
      element:post
    }});
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 onClick={() => handleClick(post)} className="text-xl font-semibold mb-2">{post.title}</h2>
            {/* <p className="text-gray-700 mb-4">{post.description}</p> */}
            <div className={`text-sm ${post.expiredAt ? 'text-red-500' : 'text-green-500'}`}>
              {post.expiredAt ? 'Expired' : 'Active'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
