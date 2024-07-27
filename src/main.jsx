import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthProvider.jsx';

// const [user,setUser]=useState('');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
          <App />
    </AuthProvider>

  </React.StrictMode>,
)
