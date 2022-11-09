import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";
import Home from './../../Pages/Home/Home';
import Singup from './../../Pages/Singup/Singup';

const { createBrowserRouter } = require("react-router-dom");



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <Singup></Singup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch('http://localhost:5000/blog')
            }
        ],
    }
]);




export default router;