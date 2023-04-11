import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import './index.css'
import Main from './components/Layout/Main';
import Phones from './components/Phones/Phones';
import Phone from './components/Phone/Phone';
import PhoneDetails from './components/PhoneDetails/PhoneDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "phones",
        element: <Phones />,
        loader: ()=> fetch('http://localhost:5000/phones')
      },
      {
      path: "/phones/:id",
      element: <PhoneDetails />,
      loader: ({params})=> fetch(`http://localhost:5000/phones/${params.id}`)
    },

    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
