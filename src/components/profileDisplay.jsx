import React from 'react';
import Button from './Button';

// ProfileDisplay component to show user's profile information
const ProfileDisplay = ({ profile, onEdit }) => (
  <div>
    <p><strong>Name:</strong> {profile.name}</p>
    <p><strong>Email:</strong> {profile.email}</p>
    <p><strong>Address:</strong> {profile.address}</p>
    <p><strong>Profession:</strong> {profile.profession}</p>
    <p><strong>Age:</strong> {profile.age}</p>
    <Button className="btn btn-primary" onClick={onEdit}>Edit</Button>
  </div>
);

export default ProfileDisplay;
