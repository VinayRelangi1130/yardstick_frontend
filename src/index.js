import React from 'react';
import ReactDOM from 'react-dom/client'; // Update this import
import './index.css';
import App from './App'; // Ensure this is correct
import { BrowserRouter as Router } from 'react-router-dom';

// Create a root container and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot

root.render(
  <Router>
    <App />
  </Router>
);
