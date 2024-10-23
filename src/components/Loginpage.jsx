import React, { useState } from 'react'; // Importing necessary React modules
import { useNavigate } from 'react-router-dom'; // Hook for navigation
import axios from 'axios'; // HTTP client for making API requests
import InputField from './InputField'; // Custom input field component
import Button from './Button'; // Custom button component

// LoginPage component for user authentication
const LoginPage = ({ setIsLoggedIn, setUserProfile }) => {
  // State to manage form data and error messages
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null); // Error state for handling login errors
  const navigate = useNavigate(); // Navigate function for redirection after login

  // Handle changes to input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target; // Destructure name and value from the input event
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update corresponding field in the formData state
    }));
  };

  // Handle the login process
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // API request to authenticate the user
      const response = await axios.post(
        'https://ap-south-1.aws.data.mongodb-api.com/app/data-froypgi/endpoint/action/findOne',
        formData // Sending the email and password from the form
      );

      // Handle successful login response
      if (response.status === 200) {
        const userData = response.data; // Extract user data from response
        setIsLoggedIn(true); // Update login status
        setUserProfile(userData); // Store user data for further use
        navigate('/account'); // Redirect to the account page
        alert('Login successful'); // Notify user of successful login
      } else if (response.status === 401) {
        // Handle invalid credentials
        alert('Invalid credentials. Please try again.');
      } else {
        // Handle case where no user is found
        alert('No user found with the provided credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error); // Log error details
      alert('Error logging in. Please check your credentials and try again.'); // Notify user of error
    }
  };

  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: '400px' }}>
      <h3 className="card-title text-center">Login</h3>
      <form onSubmit={handleLogin}>
        {/* Email input field */}
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        {/* Password input field */}
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        {/* Login button */}
        <Button type="submit" className="btn btn-primary btn-block">Login</Button>
        {error && <p className="text-danger">{error}</p>} {/* Display error message if present */}
      </form>
      <div className="text-center mt-3">
        {/* Link to sign-up page for new users */}
        <p>Don't have an account? <a href="/register">Sign up</a></p>
      </div>
    </div>
  );
};

export default LoginPage; // Export the LoginPage component for use in other parts of the application
