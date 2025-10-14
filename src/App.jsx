// App.jsx
// Main entry point with routing setup

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExperimentList from './ExperimentList';
import ExperimentDetails from './ExperimentDetails';

function App() {
  return (
    <Router basename="/iot-expts">
      <Routes>
        <Route path="/" element={<ExperimentList />} />
        <Route path="/experiment/:id" element={<ExperimentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
