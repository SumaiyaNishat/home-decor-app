import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Wishlist from "../pages/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    errorElement: <ErrorPage/>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
        {
    index: true,
    element: <Home/>,
    loader: () => fetch('./furnitureData.json')
  },
   {
    path: "/products",
    element: <Products/>,
  },    
   {
    path: "/wishlist",
    element: <Wishlist/>,
  },
    ]
  },
  
 
//   {
//     path: '*',
//     element: <ErrorPage/>
//   }
]);