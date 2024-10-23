import React, { useState } from 'react';
import axios from 'axios';
import InputField from './InputField';
import Button from './Button';
import ProfileDisplay from './profileDisplay';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for page navigation

const AccountPage = ({ userProfile, setUserProfile, setIsLoggedIn }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(userProfile);
  const [originalProfile, setOriginalProfile] = useState(userProfile);
  const navigate = useNavigate(); // Hook to navigate between routes

  // Handle input changes for profile editing
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Trigger edit mode and save the original profile
  const handleEdit = () => {
    setOriginalProfile(profile);
    setIsEditing(true);
  };

  // Cancel editing and revert to the original profile
  const handleCancel = () => {
    setProfile(originalProfile);
    setIsEditing(false);
  };

  // Save the updated profile information to the server
  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const { email, password } = originalProfile;
      const updateData = {
        name: profile.name,
        address: profile.address,
        profileImageUrl: profile.profileImageUrl,
        profession: profile.profession,
        age: profile.age,
      };

      await axios.post(
        'https://ap-south-1.aws.data.mongodb-api.com/app/data-froypgi/endpoint/action/updateOne',
        {
          filter: { email, password },
          update: updateData,
        }
      );

      setUserProfile(profile);
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating user profile:', error);
      alert('Error updating profile. Please check your details and try again.');
    }
  };

  // Handle user logout
  const handleLogout = () => {
    window.location.reload(); 
  };

  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: '600px' }}>
      <h3 className="card-title text-center">My Profile</h3>
      <div className="text-center mb-4">
        <img
          src={profile.profileImageUrl || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="img-thumbnail"
          style={{ width: '150px', height: '150px' }}
        />
      </div>

      {!isEditing ? (
        <ProfileDisplay profile={profile} onEdit={handleEdit} />
      ) : (
        <form onSubmit={handleSave}>
          <InputField
            label="Name"
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Address"
            type="text"
            name="address"
            value={profile.address}
            onChange={handleInputChange}
          />
          <InputField
            label="Profile Image URL"
            type="text"
            name="profileImageUrl"
            value={profile.profileImageUrl}
            onChange={handleInputChange}
          />
          <InputField
            label="Profession"
            type="text"
            name="profession"
            value={profile.profession}
            onChange={handleInputChange}
          />
          <InputField
            label="Age"
            type="number"
            name="age"
            value={profile.age}
            onChange={handleInputChange}
          />
          <Button type="submit" className="btn btn-primary">Save</Button>
          <Button type="button" className="btn btn-secondary ms-2" onClick={handleCancel}>Cancel</Button>
        </form>
      )}

      {/* Logout button to allow user to log out */}
      <Button type="button" className="btn btn-danger mt-3" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default AccountPage;
