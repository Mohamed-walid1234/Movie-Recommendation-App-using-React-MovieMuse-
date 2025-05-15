import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
// fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css';
// global css
import '../src/components/Utilities.css';
import './index.css'

// the app
import App from './App.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)