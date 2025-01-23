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
    return <Loader/>
  }

  return (
    <div className="p-6" >
      <h1 className="text-3xl font-bold mb-4 text-center">{post.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed">{post.body}</p>
    </div>
  );

};

export default BlogDetails;
 