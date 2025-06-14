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

const router = createBrowserRouter([
    {
        path: "/",
        Component: Rootlayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/addBook",
                Component: AddBook,
            },
            {
                path: "/bookshelf",
                loader: () =>
                    fetch(`${import.meta.env.VITE_API_URL}/bookshelf`),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
                Component: Bookshelf,
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
                Component: UpdateBook,
            },
            {
                path: "/register",
                Component: Register,
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/profile",
                Component: Profile,
            },
        ],
    },

    {
        path: "/*",
        Component: ErrorPage,
    },
]);

export default router;
