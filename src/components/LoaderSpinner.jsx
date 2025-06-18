import { motion } from "framer-motion";
import React from "react";

const LoaderSpinner = () => {
    return (
        <motion.div
            className="h-screen flex items-center justify-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <motion.span
                className="loading loading-bars loading-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            ></motion.span>
        </motion.div>
    );
};

export default LoaderSpinner;
