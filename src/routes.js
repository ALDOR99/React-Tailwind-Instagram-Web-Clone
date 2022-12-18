import AuthLayout from "components/pages/auth";
import Login from "components/pages/login";

//---------------------------------------------------------------------

const { default: Home } = require("components/pages/home");

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
];

export default routes;
