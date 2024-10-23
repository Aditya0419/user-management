import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AccountPage from './components/AccountPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To track if the user is logged in
  const [userProfile, setUserProfile] = useState(null); // To store user details

  return (
    <Router>
      <div className="container mt-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <Link className="navbar-brand" to="/">Account Manager</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Sign Up</Link>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/account">Profile</Link>
                </li>
              )}
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUserProfile={setUserProfile} />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUserProfile={setUserProfile} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={isLoggedIn ? <AccountPage userProfile={userProfile} setUserProfile={setUserProfile} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
