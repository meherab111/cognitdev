import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Services from "../pages/services";
import RootLayout from "../components/layouts/RootLayout";
import ErrorSection from "../pages/error/ErrorSection";
import Faq from "../pages/faq";
import { lazy, Suspense } from "react";
import LoaderSection from "../components/sections/LoaderSection";

const DelayedServiceDetailsSection = lazy(
  () => import("../pages/services/ServiceDetailsSection"),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorSection />,
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
        path: "/services/:serviceId",
        element: (
          <Suspense fallback={<LoaderSection />}>
            <DelayedServiceDetailsSection />
          </Suspense>
        ),
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
