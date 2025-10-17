import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Homepage from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import SignIn from "../Pages/SignIn";
import Signup from "../Pages/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Mainlayout,
        children: [
            {
                index: true,
                Component: Homepage,
            },
            {
                path: '/about-us',
                Component: AboutUs,
            },
            {
                path: '/profile',
                Component: Profile,
            },
            {
                path: '/signin',
                Component: SignIn,
            },
            {
                path:'/signup',
                Component: Signup,
            }
        ]
    }
])