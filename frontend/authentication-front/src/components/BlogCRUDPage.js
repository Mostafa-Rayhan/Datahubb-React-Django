import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogCRUDPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      fetchBlogs();
    }, []);
  
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs/');
        setBlogs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`/api/blogs/${id}/`);
        fetchBlogs();
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <h2>Manage Blogs</h2>
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <div>{blog.title}</div>
              <div>{blog.content}</div>
              <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default BlogCRUDPage