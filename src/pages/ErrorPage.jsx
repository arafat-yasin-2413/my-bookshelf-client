import React, { useEffect } from "react";
import { Link, useLocation } from "react-router";
import errorImage from "/assets/404-error.png";
import { motion } from "framer-motion";

const ErrorPage = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "404";
    }, [location.pathname]);

    return (
        <motion.section
            className="bg-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
                <div className="w-full ">
                    <div className="flex flex-col items-center max-w-lg mx-auto text-center">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.1,
                            }}
                        >
                            <img src={errorImage} alt="" />
                        </motion.div>

                        <motion.h1
                            className="mt-3 text-2xl font-semibold md:text-3xl"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.3,
                            }}
                        >
                            Page not Found
                        </motion.h1>

                        <motion.div
                            className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                                delay: 0.5,
                            }}
                        >
                            <Link
                                to="/"
                                className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                            >
                                Take me home
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ErrorPage;
