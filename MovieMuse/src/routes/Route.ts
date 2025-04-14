import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Main from "../layout/Main";
import Movies from "../pages/movies/Movies";
import Auth from "../layout/Auth";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

export default createBrowserRouter([
    {
        path: "main",
        Component: Main,
        children:[
            {
                index: true,
                Component: Home,
            },
            {
                path:"movies",
                Component: Movies,
            }
        ]
    },
    {
        path: "auth",
        Component: Auth,
        children:[
            {
                index:true,
                Component: Login,
            },
            {
                path: "signup",
                Component: Signup,
            }
        ]
    }
])