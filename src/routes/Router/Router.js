import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import NotFound from "../../Pages/NotFound/NotFound";
import ServiceDes from "../../Pages/Services/ServiceDes";
import Services from "../../Pages/Services/Services";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
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
                element: <Home></Home>,
                loader: () => fetch('https://photographer-server-gamma.vercel.app/services')
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
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://photographer-server-gamma.vercel.app/services')
            },
            {
                path: '/services/:id',
                loader: ({params}) => fetch(`https://photographer-server-gamma.vercel.app/services/${params.id}`),
                element: <PrivateRoutes><ServiceDes></ServiceDes></PrivateRoutes>
            },
            {
                path:'/reviews',
                element: <MyReviews></MyReviews>
            },
            {
                path:'*',
                element: <NotFound></NotFound>
            }
        ],
    }
]);




export default router;