import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import About from "./TextUtils/About";
import TextForm from "./TextUtils/TextForm";
import {
  createBrowserRouter,
  // Router,
  RouterProvider,
  // Route
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TextForm heading="Text Utils" Home="Home" About="About" />,
  },
  {
    path: "/about",
    element: <About Home="Home" About="About" />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);

reportWebVitals();
