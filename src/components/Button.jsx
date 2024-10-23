import React from 'react';

// Button component for rendering a reusable button element
const Button = ({ type, className, onClick, children }) => (
  <button type={type} className={className} onClick={onClick}>
    {children} {/* Render button text or elements passed as children */}
  </button>
);

export default Button; // Export the Button component for use in other parts of the application
