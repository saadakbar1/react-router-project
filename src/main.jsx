import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx'; // Ensure this path is correct
import Layout from './Layout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
