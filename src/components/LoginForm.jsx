// LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField'; // Import the InputField component

const LoginForm = ({ setIsLoggedIn, setUserProfile }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Handle input changes for form fields
    const handleInputChange = (event) => {
        const { name, value } = event.target; // Destructure name and value from the event target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // Update specific field in formData
        }));
    };

    // Handle login submission
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await axios.post(
                'https://ap-south-1.aws.data.mongodb-api.com/app/data-froypgi/endpoint/action/findOne',
                formData
            );

            // Check the response status for success
            if (response.status === 200) {
                const userData = response.data; // Replace with the actual response structure
                setIsLoggedIn(true); // Set the logged-in state
                setUserProfile(userData); // Store user data for the account page
                navigate('/account'); // Redirect to the account page
                alert('Login successful'); // Notify user of success
            } else if (response.status === 401) {
                alert('Invalid credentials. Please try again.'); // Notify of invalid credentials
            } else {
                alert('No user found with the provided credentials'); // Notify if no user is found
            }
        } catch (error) {
            console.error('Error logging in:', error); // Log any errors
            alert('Error logging in. Please check your credentials and try again.'); // Notify user of failure
        }
    };

    return (
        <form onSubmit={handleLogin}>
            {/** Form fields for user input */}
            <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
            <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleInputChange} required />
            <button type="submit" className="btn btn-primary btn-block">Login</button>
            {error && <p className="text-danger">{error}</p>} {/* Show error message if present */}
        </form>
    );
};

export default LoginForm;
