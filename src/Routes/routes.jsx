import React from "react";
import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddBook from "../pages/AddBook/AddBook";
import Bookshelf from "../pages/Bookshelf/Bookshelf";
import BookDetails from "../pages/BookDetails/BookDetails";
import UpdateBook from "../pages/UpdateBook/UpdateBook";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "../providers/PrivateRoute";
import MyBooks from "../pages/MyBooks/MyBooks";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import CategoryWiseBooks from "../pages/CategoryWiseBooks/CategoryWiseBooks";
import Home from "../pages/Home/Home";
import LoaderSpinner from "../components/LoadingSpinner/LoaderSpinner";
import Categories from "../components/Categories/Categories";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Rootlayout,
        children: [
            {
                index: true,
                loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/books/top`),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
                Component: Home,
            },
            // {
            //     path: "/categories/:categoryName",
            //     Component: Categories,
            // },
            {
                path: "/addBook",
                element: (
                    <PrivateRoute>
                        <AddBook></AddBook>
                    </PrivateRoute>
                ),
            },
            {
                path: "/bookshelf",
                loader: () =>
                    fetch(`${import.meta.env.VITE_API_URL}/bookshelf`),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
                Component: Bookshelf,
            },

            {
                path: '/books/category/:categoryName',
                // loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/books/category/${params.categoryName}`),
                // hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
                // Component: CategoryWiseBooks,
                Component: Categories,
            },

    

            {
                path: "/bookDetails/:id",
                loader: ({ params }) =>
                    fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
                Component: BookDetails,
            },
            {
                path: "/updateBook/:id",
                loader: ({ params }) =>
                    fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
                element: (
                    <PrivateRoute>
                        <UpdateBook></UpdateBook>
                    </PrivateRoute>
                ),
            },
            {
                path: "/register",
                Component: Register,
            },
            {
                path: "/login",
                Component: Login,
            },
            // {
            //     path: "/myBooks/:email",
            //     loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/myBooks/${params.email}`),
            //     hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
            //     element: (
            //         <PrivateRoute>
            //             <MyBooks></MyBooks>
            //         </PrivateRoute>
            //     ),
            // },

            {
                path: '/myBooks',
                element: <PrivateRoute>
                    <MyBooks></MyBooks>
                </PrivateRoute>
            },
            {
                path: "/profile",
                element: (
                    <PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>
                ),
            },
            {
                path: '/about',
                Component: About,
            },

            {
                path: '/contact',
                Component: Contact,
            },
        ],
    },

    {
        path: "/*",
        Component: ErrorPage,
    },
]);

export default router;
