import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import Redux Store
import { store } from './app/store.js'

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
