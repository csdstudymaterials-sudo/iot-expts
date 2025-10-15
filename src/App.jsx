// App.jsx
// Main entry point with routing setup and authentication

import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ExperimentList from './ExperimentList';
import ExperimentDetails from './ExperimentDetails';

// Authentication guard component
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem('kec_authenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  // Show loading while checking authentication
  if (isAuthenticated === null) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid rgba(255,255,255,0.3)',
            borderTop: '4px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <p>Verifying authentication...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    window.location.href = './';
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
