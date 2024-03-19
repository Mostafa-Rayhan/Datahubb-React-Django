import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import BlogCRUDPage from './components/BlogCRUDPage';
import AdminApprovalPage from './components/AdminApprovalPage';
import ApprovedBlogsPage from './components/ApprovedBlogsPage';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegistrationPage />} />
          <Route exact path="/admin/approval" element={<AdminApprovalPage />} />
          <Route exact path="/blogs" element={<BlogCRUDPage />} />
          <Route exact path="/approved-blogs" element={<ApprovedBlogsPage />} />
          <Route path="/" exact element={<LoginPage />} />
        </Routes>
    </Router>
  );
}

export default App;
