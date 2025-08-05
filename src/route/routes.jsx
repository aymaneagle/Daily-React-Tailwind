import {createBrowserRouter, Router, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import App from "../App.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ServicesPage from "../pages/ServicesPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import SimplePage from "../pages/SimplePage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [{
            path: "/",
            element:<HomePage/>,
        },
            {
                path: "/about",
                element:<AboutPage/>,
            },
            {
                path: "/services",
                element:<ServicesPage/>,
            },{
                path: "/contact",
                element:<ContactPage/>,
            },
        ],

    },
    {
        path: "/simple",
        element:<SimplePage/>,
    },
    {
        path: "*",
        element:<NotFoundPage/>,
    }
])
export default routes;