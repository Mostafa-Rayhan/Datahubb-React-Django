import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApprovedBlogsPage = () => {
    const [approvedBlogs, setApprovedBlogs] = useState([]);

    useEffect(() => {
      fetchApprovedBlogs();
    }, []);
  
    const fetchApprovedBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs/?status=approved');
        setApprovedBlogs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <h2>Approved Blogs</h2>
        <ul>
          {approvedBlogs.map(blog => (
            <li key={blog.id}>
              <div>{blog.title}</div>
              <div>{blog.content}</div>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default ApprovedBlogsPage