import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Member from "../pages/Member/Member";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Sports from "../subPages/Sports/Sports";
import Entertainment from "../subPages/Entertainment/Entertainment";
import Science from "../subPages/Science/Science";
import Romantic from "../subPages/Romantic/Romantic";
import Horror from "../subPages/Horror/Horror";
import Current from "../subPages/Current/Current";
import Gallery from "../pages/Gallery/Gallery";
import LogIn from "../pages/LogIn/LogIn";
import SignInPage from "../pages/SignInPage/SignInPage";
import DashBoard from "../pages/DashBoard/DashBoard";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "member",
                element: <Member></Member>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "journal/sports",
                element: <Sports></Sports>
            },
            {
                path: "journal/entertainment",
                element: <Entertainment></Entertainment>
            },
            {
                path: "journal/science",
                element: <Science></Science>
            },
            {
                path: "journal/romantic",
                element: <Romantic></Romantic>
            },
            {
                path: "journal/horror",
                element: <Horror></Horror>
            },
            {
                path: "journal/current",
                element: <Current></Current>
            },
            {
                path: "login",
                element: <LogIn></LogIn>
            },
            {
                path: "signin",
                element: <SignInPage></SignInPage>
            },
            {
                path: "admin/dashboard",
                element: <DashBoard></DashBoard>
            }
        ]
    }
])