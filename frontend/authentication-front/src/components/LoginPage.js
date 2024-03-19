
import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/auth/login/', credentials);
          console.log(response.data);
          // Handle successful login (e.g., redirect user)
        } catch (error) {
          console.error(error.response.data.detail);
          // Handle login error (e.g., display error message)
        }
      };
    
      return (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" value={credentials.username} onChange={handleChange} /><br/>
            <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} /><br/>
            <button type="submit">Login</button>
          </form>
        </div>
      );
}

export default LoginPage