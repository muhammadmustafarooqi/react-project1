import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from  './router/Router' // your router config
import { ThemeProvider } from './contexts/Theme'; // Import ThemeProvider
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        {/* <ThemeProvider> */}
    <RouterProvider router={router} />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
