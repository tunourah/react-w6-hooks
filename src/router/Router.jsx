import React from 'react'
import { createBrowserRouter } from "react-router-dom";
 
import CharacterPage from '../components/CharacterPage';
 import App from '../App';
const Router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
 
    },
    {
        path:"/character/:id",
        element: <CharacterPage/>,
    }

 
    
  ]);
  
  export default  Router;