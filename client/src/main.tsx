import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import lazysizes for better image loading
import 'lazysizes';

// Initialize performance monitoring
if (process.env.NODE_ENV === 'production') {
  // Add web vitals or other performance monitoring here if needed
  console.log = () => {};
  console.debug = () => {};
  console.info = () => {};
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
