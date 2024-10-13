import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx';
import Articulos from './components/Articulos.tsx';
import Frases from './components/Frases.tsx';
import Newsletter from './components/Newsletter.tsx';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Articulos />,
      },
      {
        path: "frases",
        element: <Frases />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
