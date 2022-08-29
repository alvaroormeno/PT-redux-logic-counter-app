import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import Redux Store
import { store } from './app/store.js';
// Import Provider
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the App inside the Provider and now our store / Global State will be available to the app. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
