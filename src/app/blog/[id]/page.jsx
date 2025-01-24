'use client';

import axios from "axios";
import { Loader } from "lucide-react";
import { useState, useEffect } from "react";

const BlogDetails = ({ params }) => {
  const { id } = params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const fetchedPost = response.data;


      setPost(fetchedPost);
    };

    fetchData();
  }, [id]);

  if (!post) {
    return <Loader />
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Post Details</h1>
      <div className="p-6 md:w-1/3 mx-auto my-10 border border-cyan-400 rounded-2xl" >
      
      
      <div className="p-[18px] pt-2.5 bg-white rounded-b-md">
        <h3 className="text-[1.5rem] font-bold text-[#0FABCA]">{post.title}</h3>
        <p className="text-[1rem] font-[400] text-gray-600">{post.body}</p>

        <button
          className="w-full py-2 px-4 hover:bg-[#c0e6ed] hover:text-black text-[1rem] transition-all duration-300 bg-[#0FABCA] text-white rounded-md mt-5">Mark as read
        </button>
      </div>
    </div>
    </div>
  );

};

export default BlogDetails;
