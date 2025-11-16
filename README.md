# Employee Polls Web Application

A modern, interactive polling application built with React and Redux for employees to create, vote on, and track polls within an organization. This project demonstrates advanced React patterns, Redux state management, and modern UI/UX design principles.

## 📋 Table of Contents

- [Employee Polls Web Application](#employee-polls-web-application)
- [Overview](#-overview)
- [Features](#features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Usage Guide](#-usage-guide)
- [Application Architecture](#-application-architecture)
- [API Documentation](#-api-documentation)
- [Testing](#-testing)
- [Development](#-development)

## 🎯 Overview

The Employee Polls Web Application is a full-stack React application that allows users to:
- **Create polls** with two voting options
- **Vote on polls** created by other users
- **View results** of polls they've participated in
- **Track rankings** on a leaderboard based on poll creation and participation
- **Manage authentication** with a secure login system

This application was developed as part of Udacity's React & Redux Nanodegree program, showcasing proficiency in React hooks, Redux state management, React Router, and modern JavaScript practices.

## Features

### Core Functionality

1. **User Authentication**
   - Secure login system with user selection
   - Protected routes that require authentication
   - Session management with Redux state persistence
   - Automatic redirect to login for unauthenticated users

2. **Poll Management**
   - Create new polls with two customizable options
   - View all polls in a categorized dashboard
   - Separate views for answered and unanswered polls
   - Real-time poll results with vote counts and percentages
   - Visual indicators showing user's vote selection

3. **Leaderboard System**
   - Dynamic ranking based on:
     - Number of questions created
     - Number of questions answered
   - Visual score display with badges
   - Sorted by total score (questions + answers)

4. **User Experience**
   - Responsive design using Tailwind CSS and DaisyUI
   - Modern, clean interface with intuitive navigation
   - Loading states and error handling
   - 404 error page for invalid routes
   - Poll cards with author information and timestamps

### Technical Features

- **State Management**: Centralized state with Redux Toolkit
- **Routing**: Client-side routing with React Router v6
- **Middleware**: Custom logging middleware for debugging
- **Data Persistence**: Simulated backend with local storage
- **Component Architecture**: Reusable, modular components
- **Testing**: Comprehensive test suite with Jest and React Testing Library

## 🛠 Technology Stack

### Core Dependencies

- **React** (^18.1.0) - UI library for building user interfaces
- **React DOM** (^18.1.0) - React renderer for web applications
- **React Router DOM** (^6.3.0) - Declarative routing for React applications
- **Redux Toolkit** (^1.8.2) - Official Redux toolkit for efficient state management
- **React Redux** (^8.0.2) - React bindings for Redux

### UI & Styling

- **Tailwind CSS** (^3.2.4) - Utility-first CSS framework
- **DaisyUI** (^2.46.1) - Component library built on Tailwind CSS
- **Bootstrap** (^5.3.3) - Additional CSS framework for components
- **Font Awesome** (^6.5.2) - Icon library for enhanced UI elements

### Development Tools

- **React Scripts** (5.0.1) - Build tooling and development server
- **Jest** (^28.1.3) - JavaScript testing framework
- **React Testing Library** (^13.3.0) - Testing utilities for React components
- **Prettier** (^3.2.5) - Code formatter for consistent style
- **PostCSS** (^8.4.14) - CSS processing tool
- **Autoprefixer** (^10.4.7) - CSS vendor prefixer

## 📁 Project Structure

```
React-nanodegree-2nd-project/
│
├── public/                 # Static assets and HTML template
│   ├── index.html         # Main HTML file
│   └── manifest.json      # PWA manifest
│
├── src/                   # Source code directory
│   ├── actions/          # Redux action creators
│   │   ├── authedUser.js # Authentication actions
│   │   ├── initialData.js # Initial data loading actions
│   │   ├── polls.js      # Poll-related actions
│   │   └── users.js      # User-related actions
│   │
│   ├── components/       # Reusable React components
│   │   ├── Navbar.js     # Navigation bar component
│   │   ├── PollCard.js   # Poll card display component
│   │   └── PrivateWrapper.js # Route protection wrapper
│   │
│   ├── data/             # Data layer and API
│   │   ├── _DATA.js      # Simulated database and methods
│   │   ├── _DATA.test.js # Database method tests
│   │   └── api.js        # API wrapper functions
│   │
│   ├── middlewares/      # Redux middleware
│   │   ├── index.js      # Middleware configuration
│   │   └── logger.js     # Action logging middleware
│   │
│   ├── pages/            # Page components (routes)
│   │   ├── Dashboard.js  # Main dashboard page
│   │   ├── Leaderboard.js # Leaderboard page
│   │   ├── Login.js      # Login page
│   │   ├── NewPoll.js    # Create new poll page
│   │   ├── Poll.js       # Individual poll view
│   │   ├── PollWrapper.js # Poll page wrapper
│   │   ├── Error.js      # 404 error page
│   │   └── *.test.js     # Component tests
│   │
│   ├── reducers/         # Redux reducers
│   │   ├── authUser.js   # Authentication state reducer
│   │   ├── questions.js  # Questions/polls state reducer
│   │   ├── users.js      # Users state reducer
│   │   └── index.js      # Root reducer
│   │
│   ├── App.js            # Main application component
│   ├── index.js          # Application entry point
│   └── index.css         # Global styles
│
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── README.md            # This file
```

## 🚀 Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher) or **yarn**

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd React-nanodegree-2nd-project
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   This will install all required dependencies listed in `package.json`.

3. **Configure Avatar URLs** (if needed)
   - Open `src/data/_DATA.js`
   - Update the `avatarURL` property for each user with valid image paths
   - Ensure avatar images are accessible

4. **Start the Development Server**
   ```bash
   npm start
   ```
   The application will open automatically in your browser at `http://localhost:3000`

5. **Build for Production**
   ```bash
   npm run build
   ```
   Creates an optimized production build in the `build/` directory.

6. **Run Tests**
   ```bash
   npm run test
   ```
   Runs the test suite in watch mode. Press `a` to run all tests.

## 📖 Usage Guide

### Getting Started

1. **Login**
   - Navigate to the application
   - You'll be redirected to the login page if not authenticated
   - Select a user from the dropdown menu
   - Click "Login" to access the application

2. **View Dashboard**
   - After logging in, you'll see the main dashboard
   - Toggle between "Unanswered Poll" and "Answered Poll" tabs
   - Click on any poll card to view details and vote

3. **Create a Poll**
   - Click "New Poll" in the navigation bar
   - Enter two options for your poll
   - Click "Submit" to create the poll
   - The poll will appear in the dashboard

4. **Vote on a Poll**
   - Click on any unanswered poll from the dashboard
   - Select one of the two options
   - Click "Submit" to cast your vote
   - View the results with vote counts and percentages

5. **View Leaderboard**
   - Click "Leaderboard" in the navigation bar
   - See all users ranked by their total score
   - Scores are calculated from questions created + questions answered

6. **Logout**
   - Click "Logout" in the navigation bar
   - You'll be redirected to the login page

### Available Routes

- `/login` - Login page (public)
- `/` - Dashboard (protected)
- `/leaderboard` - Leaderboard page (protected)
- `/add` - Create new poll (protected)
- `/questions/:id` - View individual poll (protected)
- `*` - 404 error page for invalid routes

## 🏗 Application Architecture

### State Management (Redux)

The application uses Redux Toolkit for centralized state management with three main slices:

1. **authUser Reducer**
   - Stores the currently authenticated user
   - Manages login/logout state
   - Used for route protection

2. **questions Reducer**
   - Stores all poll questions
   - Handles adding new questions
   - Manages question answers and votes

3. **users Reducer**
   - Stores all user data
   - Updates user statistics (questions, answers)
   - Used for leaderboard calculations

### Component Architecture

- **Container Components**: Connected to Redux store (Dashboard, Leaderboard, etc.)
- **Presentational Components**: Reusable UI components (PollCard, Navbar)
- **Page Components**: Route-level components that compose smaller components
- **Wrapper Components**: Utility components (PrivateWrapper for route protection)

### Data Flow

1. **Initial Load**: `App.js` dispatches `receiveInitialData()` on mount
2. **Action Dispatch**: User interactions trigger Redux actions
3. **Reducer Update**: Reducers update the store based on action types
4. **Component Re-render**: Connected components automatically re-render with new state
5. **API Calls**: Actions make async calls to `api.js` which interfaces with `_DATA.js`

### Middleware

- **Logger Middleware**: Logs all Redux actions and state changes for debugging
- Applied to all actions in the Redux store

## 📡 API Documentation

The application uses a simulated backend (`_DATA.js`) that provides the following methods:

### Data Models

#### User Object
```javascript
{
  id: String,           // Unique user identifier
  password: String,     // User password (for login)
  name: String,        // User's full name
  avatarURL: String,   // Path to user's avatar image
  questions: Array,    // Array of question IDs created by user
  answers: Object      // Object mapping question IDs to answers
}
```

#### Question Object
```javascript
{
  id: String,          // Unique question identifier
  author: String,      // User ID of the question creator
  timestamp: String,   // Unix timestamp of creation
  optionOne: {
    votes: Array,      // Array of user IDs who voted for this option
    text: String       // Text of the first option
  },
  optionTwo: {
    votes: Array,      // Array of user IDs who voted for this option
    text: String       // Text of the second option
  }
}
```

### API Methods

#### 1. `getInitialData()`

**Description**: Fetches all users and questions from the database.

**Returns**: Promise that resolves to an object:
```javascript
{
  users: Object,      // Object mapping user IDs to user objects
  questions: Object   // Object mapping question IDs to question objects
}
```

**Usage**:
```javascript
import { getInitialData } from './data/api';

getInitialData().then(({ users, questions }) => {
  // Handle users and questions
});
```

#### 2. `saveQuestion(question)`

**Description**: Saves a new poll question to the database.

**Parameters**: Object with the following properties:
```javascript
{
  author: String,        // ID of the user creating the question
  optionOneText: String, // Text for the first option
  optionTwoText: String  // Text for the second option
}
```

**Returns**: Promise that resolves to the created question object with:
- `id`: Generated unique identifier
- `author`: User ID
- `optionOne`: Object with `text` and `votes` array
- `optionTwo`: Object with `text` and `votes` array
- `timestamp`: Unix timestamp

**Usage**:
```javascript
import { saveQuestion } from './data/api';

saveQuestion({
  author: 'user123',
  optionOneText: 'Option A',
  optionTwoText: 'Option B'
}).then((question) => {
  // Handle created question
});
```

#### 3. `saveQuestionAnswer(info)`

**Description**: Saves a user's answer to a question.

**Parameters**: Object with the following properties:
```javascript
{
  authedUser: String,  // ID of the user answering
  qid: String,         // ID of the question being answered
  answer: String       // Either 'optionOne' or 'optionTwo'
}
```

**Returns**: Promise that resolves when the answer is saved.

**Usage**:
```javascript
import { saveQuestionAnswer } from './data/api';

saveQuestionAnswer({
  authedUser: 'user123',
  qid: 'question456',
  answer: 'optionOne'
}).then(() => {
  // Answer saved successfully
});
```

## 🧪 Testing

### Running Tests

```bash
npm run test
```

This command:
- Runs all test files in watch mode
- Updates snapshots when needed
- Provides interactive test runner

### Test Structure

- **Component Tests**: Located in `src/pages/*.test.js`
- **Data Tests**: Located in `src/data/_DATA.test.js`
- **Snapshots**: Stored in `src/pages/__snapshots__/`

### Test Coverage

The test suite includes:
- Component rendering tests
- User interaction tests
- Redux action and reducer tests
- API method tests
- Snapshot tests for UI consistency

### Writing New Tests

Example test structure:
```javascript
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Component from './Component';

test('renders component', () => {
  const store = configureStore({ reducer: rootReducer });
  render(
    <Provider store={store}>
      <Component />
    </Provider>
  );
  // Test assertions
});
```

## 💻 Development

### Available Scripts

- **`npm start`**: Starts the development server on `http://localhost:3000`
- **`npm run build`**: Creates an optimized production build
- **`npm test`**: Runs the test suite in watch mode
- **`npm run prettier`**: Formats all code using Prettier



### Development Workflow

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Run tests: `npm run test`
5. Format code: `npm run prettier`
6. Test locally: `npm start`
7. Commit and push changes

### Debugging

- Redux DevTools: Install the browser extension for Redux state inspection
- Logger Middleware: Check console for action logs
- React DevTools: Use React DevTools for component inspection
