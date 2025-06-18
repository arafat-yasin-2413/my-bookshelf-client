import React, { useEffect } from "react";
import { Link, useLocation } from "react-router";
import errorImage from "/assets/404-error.png";

const ErrorPage = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "404";
    }, [location.pathname]);

    return (
        <section className="bg-gray-200">
            <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
                <div className="w-full ">
                    <div className="flex flex-col items-center max-w-lg mx-auto text-center">


                        <div>
                            <img src={errorImage} alt="" />
                        </div>


                        <h1 className="mt-3 text-2xl font-semibold md:text-3xl">
                            Page not Found
                        </h1>
                        

                        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">


                            <Link to="/" className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                                Take me home
                            </Link>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
