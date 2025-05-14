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
import Movie_Page from './pages/movie_page/Movie_Page.tsx';
import Profile from './pages/profile/Profile.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Profile />
    <Movie_Page />
    <App />
  </StrictMode>
)