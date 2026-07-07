import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

// Suppress unhandled promise rejections from third-party scripts or extensions (e.g., status 403 / name 'n')
if (typeof window !== "undefined") {
  window.addEventListener("unhandledrejection", (event) => {
    if (event.reason && typeof event.reason === "object") {
      const r = event.reason;
      if (r.code === 403 || r.name === "n" || r.httpStatus === 200) {
        event.preventDefault();
      }
    }
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
