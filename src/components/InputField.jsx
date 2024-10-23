// InputField.jsx
import React from 'react';

// InputField component for rendering a labeled input element
const InputField = ({ label, name, type, value, onChange, required = false }) => {
    return (
        <div className="form-group mb-3">
            <label>{label}</label> {/* Render input label */}
            <input
                type={type} /* Set input type (e.g., text, email, number) */
                className="form-control" /* Bootstrap class for styling */
                name={name} /* Name attribute for input field */
                value={value} /* Controlled component value */
                onChange={onChange} /* Event handler for input changes */
                required={required} /* Mark input as required if true */
            />
        </div>
    );
};

export default InputField; // Export the InputField component for use in other parts of the application
