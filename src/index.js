import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import Homepage from './Pages/Homepage/Homepage'
// import reportWebVitals from './reportWebVitals';
import { RouterProvider, BrowserRouter, createBrowserRouter } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Product from './Pages/Product/Product';
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
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// 