import React, { useState } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        companyName: '',
        phoneNumber: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/auth/register/', formData);
          console.log(response.data);
          // Handle successful registration (e.g., redirect user)
        } catch (error) {
          console.error(error.response.data);
          // Handle registration error (e.g., display error message)
        }
      };
    
      return (
        <div>
          <h2>Registration</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br/>
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} /><br/>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} /><br/>
            <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} /><br/>
            <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} /><br/>
            <button type="submit">Register</button>
          </form>
        </div>
      );
}

export default RegistrationPage