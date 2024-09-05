import React, { useState } from 'react';
import axios from 'axios';
const Create=()=>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const[expired,setExpired]=useState(true)
    const create = (obj) => {
    obj.expiredAt=true
        axios.post("http://localhost:3100/api/posts/add",obj)
        .then((response)=>{
        console.log("ahaya",response.data)
        })  
      .catch((err)=>{
        console.log(err)
      })
       console.log("obj",obj)
        };  
return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div class="max-w-md mx-auto">
          <div class="flex items-center space-x-5">
            <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
            <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
              <h2 class="leading-relaxed">Create an Post</h2>
              <p class="text-sm text-gray-500 font-normal leading-relaxed"></p>
            </div>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div class="flex flex-col">
                <label class="leading-loose">Post Title</label>
                <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Title" value={title}
          onChange={(e) => setTitle(e.target.value)}/>
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Post description</label>
                <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Description"value={description}
          onChange={(e) => setDescription(e.target.value)}/>
              </div>
              
              <div class="flex flex-col">
                <label class="leading-loose">Expiration</label>
                <input type="checkbox" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="" value={expired}
          onChange={(e) => setExpired(e.target.value)}/>
              </div>
            </div>
            <div class="pt-4 flex items-center space-x-4">
                <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                  <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
                </button>
                <button onClick={()=>create({title,description})} class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}
export default Create