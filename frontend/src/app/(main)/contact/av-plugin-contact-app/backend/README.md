# AV Plugin Contact App

## Overview
The AV Plugin Contact App is a full-stack application that allows users to submit contact forms. The frontend is built with React, while the backend is powered by Node.js and Express, utilizing MongoDB for data storage.

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

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install the required dependencies:
   ```
   npm install
   ```

### Configuration
- Update the MongoDB connection string in `config/db.js` to point to your MongoDB instance.

### Running the Server
To start the backend server, run:
```
node app.js
```
The server will be running on `http://localhost:5000` by default.

## API Endpoints
- **POST /api/contact**: Submits a new contact form. Expects a JSON body with `firstname`, `lastname`, `email`, and `message`.

## Frontend Setup

### Installation
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install the required dependencies:
   ```
   npm install
   ```

### Running the Frontend
To start the frontend application, run:
```
npm start
```
The application will be running on `http://localhost:3000` by default.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.