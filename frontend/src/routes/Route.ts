import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Main from "../layout/Main";
import Movies from "../pages/movies/Movies";
import Auth from "../layout/Auth";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Profile from "../pages/profile/Profile";
import Movie_Page from "../pages/singlemovie/Movie_Page";


export default createBrowserRouter([
    {
        path: "main",
        Component: Main,
        children:[
            {
                index: true,
                Component: Movies,
            },
            {
                path:"home",
                Component: Home,
            },

            {
                path:"profile",
                Component: Profile,
            },
            {
                path: "/main/:id",
                Component: Movie_Page,
            },
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
                path:"login/*",
                Component: Login,
            },
            {
                path: "signup",
                Component: Signup,
            }
        ]
    }
])