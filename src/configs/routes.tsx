import { createBrowserRouter } from "react-router"
import RootLayout from "../layouts/RootLayout"
import Error from "../components/Error"
import Home from "../pages/home"

const router = createBrowserRouter ([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default router
