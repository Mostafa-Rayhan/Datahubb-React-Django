import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import BlogCRUDPage from './components/BlogCRUDPage';
import AdminApprovalPage from './components/AdminApprovalPage';
import ApprovedBlogsPage from './components/ApprovedBlogsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/admin/approval" component={AdminApprovalPage} />
          <Route path="/blogs" component={BlogCRUDPage} />
          <Route path="/approved-blogs" component={ApprovedBlogsPage} />
          <Route path="/" exact component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
