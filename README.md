# DevConnect

A full-stack social networking application built with React, Node.js, Express, and MongoDB.

## Overview

DevConnect is a platform for developers to connect, share profiles, and build professional relationships. The application allows users to create profiles, send connection requests, and discover other developers.

## Tech Stack

- **Frontend**: React.js, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt for password hashing
- **Deployment**: Vercel (Backend)

## Features

- User authentication (signup/login/logout)
- Profile management
- Connection requests system
- User discovery feed
- Secure password handling
- JWT-based session management

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

- `DB_CONNECTION_STRING`: Your MongoDB connection string
- `NODE_ENV`: Environment mode (development/production)

Example `.env` file:
```
DB_CONNECTION_STRING=mongodb+srv://<username>:<password>@cluster.mongodb.net/devconnect?retryWrites=true&w=majority
NODE_ENV=development
```

## Installation

1. Clone the repository
2. Navigate to the server directory: `cd server`
3. Install server dependencies: `npm install`
4. Navigate to the client directory: `cd ../client`
5. Install client dependencies: `npm install`
6. Create a `.env` file in the server directory with your environment variables
7. Start the server: `npm start` (from the server directory)

## API Endpoints

### Authentication
- `POST /api/signup` - Create a new user account
- `POST /api/login` - Authenticate user and return JWT
- `POST /api/logout` - Clear user session

### Profile Management
- `GET /api/profile/view` - Get current user's profile
- `PATCH /api/profile/edit` - Update user's profile

### Connection Requests
- `POST /api/request/send/:status/:toUserId` - Send connection request
- `POST /api/request/review/:status/:requestId` - Accept/reject connection request

### User Data
- `GET /api/user/requests/received` - Get received connection requests
- `GET /api/user/connections` - Get accepted connections
- `GET /api/feed` - Get user discovery feed

## Security Features

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- Input validation and sanitization
- Secure session management
- Protection against common vulnerabilities

## Deployment

The backend is deployed on Vercel. To deploy:
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Vercel will automatically build and deploy the application

## Project Structure

```
DevConnect/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── utils/         # Utility functions
│   │   └── ...
├── server/                 # Node.js/Express backend
│   ├── src/
│   │   ├── config/        # Database configuration
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API route handlers
│   │   ├── middlewares/   # Custom middleware
│   │   └── utils/         # Utility functions
│   └── ...
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit your changes
5. Push to the branch
6. Open a pull request

## License

This project is licensed under the ISC License.