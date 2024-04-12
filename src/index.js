import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import Homepage from './Pages/Homepage/Homepage'
// import reportWebVitals from './reportWebVitals';
import { RouterProvider, BrowserRouter, createBrowserRouter } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Product from './Pages/Product/Product';
import Cart from './Pages/Cart/Cart';
import SignIn from './Pages/SignIn/SignIn';
import ContextProviderFoodCartWebApp from './Components/Context/ContextFoodCartWebApp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    errorElement: <NotFound/>
  },
  {
    path: "product/:productCategory/:productID",
    element: <Product/>,
    errorElement: <NotFound/>
  },
  {
    path: "cart/",
    element: <Cart/>,
    errorElement: <NotFound/>
  },
  {
    path: "SignIn/",
    element: <SignIn/>,
    errorElement: <NotFound/>
  }

]);
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <ContextProviderFoodCartWebApp>
    <RouterProvider router={router}/>
  </ContextProviderFoodCartWebApp>

  
  
);
