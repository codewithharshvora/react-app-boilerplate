import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // With Navbar and Footer
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
