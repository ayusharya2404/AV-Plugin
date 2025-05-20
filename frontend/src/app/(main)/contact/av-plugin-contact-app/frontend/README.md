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

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd av-plugin-contact-app
   ```

2. **Backend Setup**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Configure your MongoDB connection in `config/db.js`.
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup**
   - Open a new terminal and navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend application:
     ```bash
     npm start
     ```

### Usage
- Access the frontend application in your browser at `http://localhost:3000`.
- Fill out the contact form and submit it. The data will be sent to the backend and stored in the MongoDB database.

## API Endpoints
- **POST /api/contact**: Submits a new contact form entry.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.