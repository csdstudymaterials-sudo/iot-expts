// App.jsx
// Main entry point with routing setup and authentication

import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ExperimentList from './ExperimentList';
import ExperimentDetails from './ExperimentDetails';

// Authentication guard component
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem('kec_authenticated');
    const authenticated = authStatus === 'true';
    setIsAuthenticated(authenticated);

    // Redirect to login if not authenticated
    if (!authenticated) {
      window.location.href = './';
    }
  }, []);

  // Don't render anything while redirecting or if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <ExperimentList />
          </ProtectedRoute>
        } />
        <Route path="/experiment/:id" element={
          <ProtectedRoute>
            <ExperimentDetails />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
