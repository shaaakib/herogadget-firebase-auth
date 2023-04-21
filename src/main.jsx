import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './components/Home';
import App from './App';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { productsAndCartData } from './loaders/getCart&ProductsData';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import AuthProviders from './components/Providers/AuthProviders';
import Order from './components/Order';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: productsAndCartData,
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/cart', element: <Cart /> },
      {
        path: '/about',
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      {
        path: '/order',
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <RouterProvider router={router} />
    <Toaster />
  </AuthProviders>
);
