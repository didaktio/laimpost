import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';
import { HomePage } from './pages/components/HomePage/HomePage';
import { ArticlePage } from './pages/components/ArticlePage/ArticlePage';
import { AboutPage } from './pages/components/AboutPage/AboutPage';
import { ContactPage } from './pages/components/ContactPage/ContactPage';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/:slug',
    element: <ArticlePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('laimroot') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
