import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ReactPWAInstallProvider from "react-pwa-install";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ReactPWAInstallProvider>
          <App />
      </ReactPWAInstallProvider>

  </React.StrictMode>,
)
