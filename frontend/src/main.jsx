import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter as Router } from 'react-router'


createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </StrictMode>
  </Router>
)
