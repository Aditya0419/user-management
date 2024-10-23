// RegisterPage.jsx
import React from 'react';
import RegisterForm from './RegisterForm'; // Import the RegisterForm component

const RegisterPage = () => {
    return (
        <div className="card p-4 mx-auto" style={{ maxWidth: '600px' }}>
            <h3 className="card-title text-center">Register</h3>
            <RegisterForm /> {/* Use the RegisterForm component here */}
        </div>
    );
};

export default RegisterPage;
