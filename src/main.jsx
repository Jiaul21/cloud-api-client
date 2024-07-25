import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextProvider, { UserContext } from './context/UserContext.jsx';

// const [user,setUser]=useState('');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ContextProvider>
          <App />
          {/* <h1>hello</h1> */}
    </ContextProvider>

  </React.StrictMode>,
)
