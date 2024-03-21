import { createBrowserRouter } from "react-router-dom";
import ErrorRoute from "../ErrorRoute/ErrorRoute";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddedProduct from "../AddedFile/AddedProduct/AddedProduct";
import UpdateProduct from "../AddedFile/UpdateProduct/UpdateProduct";
import Register from "../Register/Register";
import Login from "../Login/Login";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorRoute></ErrorRoute>,
        children: [
            {
                 path: '/',
                 element: <Home></Home>,
                 loader: () => fetch('http://localhost:5000/addedProduct')
            },
            {
                 path: '/register',
                 element: <Register></Register>,
            },
            {
                 path: '/login',
                 element: <Login></Login>,
            },
            {
                 path: '/addProduct',
                 element: <AddedProduct></AddedProduct>,
            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/addedProduct/${params.id}`)
           },
        ]
    },
]);

export default router;