import React, { useEffect } from "react";
import { Link, useLocation } from "react-router";

const ErrorPage = () => {

    const location = useLocation();
    useEffect(()=>{
        document.title = "404";
    },[location.pathname])

    return (
        <div className="w-3xl mx-auto border border-secondary my-10 p-4">
            <h2>this is error page</h2>

            <div className="mt-6">
                <Link className="text-white font-bold p-2 bg-primary rounded" to="/">
                    Go To Home Page
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
