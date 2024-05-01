import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../LayOut/Root";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import SignUp from "../Pages/Login/SignUp";
import SignIn from "../Pages/Login/SignIn";

const router = createBrowserRouter ([
    {
        path : '/',
        element :<Root></Root>,
        _children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
           
        ],
        get children() {
            return this._children;
        },
        set children(value) {
            this._children = value;
        },
    },
]);

export default router;