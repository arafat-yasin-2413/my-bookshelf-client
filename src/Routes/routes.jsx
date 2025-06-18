import React from "react";
import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../components/Home";
import ErrorPage from "../pages/ErrorPage";
import AddBook from "../pages/AddBook";
import Bookshelf from "../pages/Bookshelf";
import BookDetails from "../pages/BookDetails";
import UpdateBook from "../pages/UpdateBook";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import LoaderSpinner from "../components/LoaderSpinner";
import PrivateRoute from "../providers/PrivateRoute";
import MyBooks from "../pages/MyBooks";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CategoryWiseBooks from "../pages/CategoryWiseBooks";

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
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/books/category/${params.categoryName}`),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
                Component: CategoryWiseBooks,
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
