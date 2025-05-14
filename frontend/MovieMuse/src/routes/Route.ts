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
                path:"home",
                Component: Home,
            },
            {
                index: true,
                Component: Movies,
            }
        ]
    },
    {
        Component: Auth,
        children:[
            {
                
                index: true,
                Component: Home,
            },
            {
                path:"login",
                Component: Login,
            },
            {
                path: "signup",
                Component: Signup,
            }
        ]
    }
])