import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Profile from "./components/Screens/Profile/Profile.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./components/Contexts/UserProvider/userProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <UserProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserProvider>
  </RouterProvider>
);
