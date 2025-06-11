import React from "react";
import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Rootlayout,
        children:[
            {
                index: true,
                Component: Home
            },
        ]
    },
]);

export default router;
