import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AdminApprovalPage = () => {
    const [pendingBlogs, setPendingBlogs] = useState([]);

    useEffect(() => {
      fetchPendingBlogs();
    }, []);
  
    const fetchPendingBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs/?status=pending');
        setPendingBlogs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleApproval = async (id) => {
      try {
        await axios.put(`/api/blogs/${id}/`, { status: 'approved' });
        fetchPendingBlogs();
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <h2>Admin Approval</h2>
        <ul>
          {pendingBlogs.map(blog => (
            <li key={blog.id}>
              <div>{blog.title}</div>
              <div>{blog.content}</div>
              <button onClick={() => handleApproval(blog.id)}>Approve</button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default AdminApprovalPage