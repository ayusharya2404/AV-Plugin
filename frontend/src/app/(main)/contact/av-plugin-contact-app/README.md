# AV Plugin Contact App

## Overview
The AV Plugin Contact App is a full-stack application that allows users to submit contact forms. The application is built using React for the frontend and Node.js with Express and Mongoose for the backend. The submitted contact data is stored in a MongoDB database.

## Project Structure
```
av-plugin-contact-app
├── backend
│   ├── controllers
│   │   └── contactController.js
│   ├── models
│   │   └── Contact.js
│   ├── routes
│   │   └── contactRoutes.js
│   ├── app.js
│   ├── config
│   │   └── db.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── app
│   │   │   └── (main)
│   │   │       └── contact
│   │   │           └── page.jsx
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Backend Setup
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the MongoDB connection in `config/db.js`:
   - Update the connection string with your MongoDB URI.

4. Start the backend server:
   ```
   node app.js
   ```

## Frontend Setup
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend application:
   ```
   npm start
   ```

## API Usage
- **POST /api/contact**: Submit a contact form.
  - Request Body:
    ```json
    {
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com",
      "message": "Hello, I would like to know more about your services."
    }
    ```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.