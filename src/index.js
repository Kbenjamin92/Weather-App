import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DataProvider from './context/Context'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <Router>
      <App />
      </Router>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
