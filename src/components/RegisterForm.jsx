// RegisterForm.jsx
import React, { useState } from 'react';
import Axios from 'axios';
import InputField from './InputField'; // Import the reusable InputField component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        profileImageUrl: "",
        profession: "",
        age: "",
    });

    const navigate = useNavigate(); // Initialize navigate for redirection

    // Handle input changes for form fields
    const handleInputChange = (event) => {
        const { name, value } = event.target; // Destructure name and value from the event target
        setFormData((currData) => ({
            ...currData,
            [name]: value, // Update specific field in formData
        }));
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try {
            // Send a POST request to register the user
            await Axios.post("https://ap-south-1.aws.data.mongodb-api.com/app/data-froypgi/endpoint/action/insertOne", formData);
            console.log("User registered successfully:", formData);
            
            // Reset form fields after successful registration
            setFormData({
                name: "",
                email: "",
                password: "",
                address: "",
                profileImageUrl: "",
                profession: "",
                age: "",
            });

            alert('Successfully Registered'); // Notify user of success
            navigate('/account'); // Redirect to the account page
        } catch (error) {
            console.error("Registration error:", error); // Log any registration errors
            alert('Registration failed. Please try again.'); // Notify user of failure
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/** Form fields for user input */}
            <InputField label="Name" name="name" type="text" value={formData.name} onChange={handleInputChange} required />
            <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
            <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleInputChange} required />
            <InputField label="Address" name="address" type="text" value={formData.address} onChange={handleInputChange} />
            <InputField label="Profile Image URL" name="profileImageUrl" type="text" value={formData.profileImageUrl} onChange={handleInputChange} />
            <InputField label="Profession" name="profession" type="text" value={formData.profession} onChange={handleInputChange} />
            <InputField label="Age" name="age" type="number" value={formData.age} onChange={handleInputChange} />
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    );
};

export default RegisterForm;
