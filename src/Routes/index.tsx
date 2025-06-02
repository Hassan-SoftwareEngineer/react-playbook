import Layout from "@/layout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout />,
        children : [
            {                index : true,
                element : <Home />
            },
             {
        path : "about",
        element : <About />
    },  
        ]
    }  
])

const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Routes;
