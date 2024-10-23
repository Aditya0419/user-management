# User Account Management Application

# Author: [Aditya Mahajan]

## login credentials: 
**email:** admin@gmail.com
**password:** trial234

## Project Overview

The User Account Management Application is a web-based solution designed for seamless user authentication and profile management. This application allows users to log in, view their profiles, and update personal information efficiently. Built using React for the frontend and integrated with MongoDB for data storage, this application provides a user-friendly interface while adhering to best practices in software development.

## Technologies Used

- **Frontend:** React.js
- **State Management:** React Hooks (useState, useEffect)
- **Styling:** Bootstrap
- **API Interaction:** Axios
- **Database:** MongoDB (via MongoDB Data API)

## Features

- User login with email and password.
- Profile display with editable fields.
- Form validations for user input.
- Logout functionality to enhance user experience.
- Responsive design for optimal viewing on various devices.

## Implementation Process

1. **Project Initialization:** 
   - Created a new React application using `create-react-app`.
   - Set up routing with `react-router-dom` for navigation between login and account pages.

2. **Component Structure:**
   - Developed reusable components: 
     - `InputField` for form input.
     - `Button` for consistent button design.
     - `ProfileDisplay` for rendering user profile information.
   - Implemented the `AccountPage` component to manage user profile states and handle edits.

3. **API Integration:**
   - Utilized Axios to handle API requests to MongoDB for user authentication and profile updates.
   - Implemented error handling to manage API response scenarios effectively.

4. **State Management:**
   - Managed component states using React's `useState` to handle user input and profile updates.
   - Employed a controlled component approach for form handling.

5. **Styling:**
   - Applied Bootstrap classes to ensure a responsive and modern user interface.

## Setup Instructions

To set up the project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/user-account-management.git
   cd user-account-management
2. **Install Dependencies:** 
    Ensure you have Node.js and npm installed. 
    Then run:

    ```bash
    npm install

3. **Environment Configuration:**

    Set up your MongoDB Data API with appropriate credentials and endpoints.
    Update the API URLs in the code where necessary.

4. **Run the Application:**
    Start the development server with:

    ```bash
    npm run dev
    The application will be accessible at http://localhost:5173.
