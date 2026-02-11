import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Services from "../pages/services";
import RootLayout from "../components/layouts/RootLayout";
import ErrorPage from "../pages/error";
import Faq from "../pages/faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
