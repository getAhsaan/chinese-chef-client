import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'react-tooltip/dist/react-tooltip.css'
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";
import AuthProvider from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
);
