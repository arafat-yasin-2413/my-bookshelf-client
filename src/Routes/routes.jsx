import React from "react";
import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Rootlayout,
    },
]);

export default router;
