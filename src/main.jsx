
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const params = new URLSearchParams(window.location.search);
const redirect = params.get('redirect');

if (redirect && redirect.startsWith('/') && !redirect.startsWith('//')) {
  window.history.replaceState(
    null,
    '',
    '/Safedial-month2' + redirect
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Safedial-month2">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
