import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Login from "./pages/login.jsx";
import SignUp from "./pages/signup.jsx";
import Error from "./pages/error.jsx";
import Home from "./pages/home.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/home", element: <Home /> },
      { path: "*", element: <Error /> },
    ],
  },
]);
