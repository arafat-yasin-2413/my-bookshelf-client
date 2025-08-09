import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="bg-[url(/assets/banner-images/book-banner-static.jpg)] w-full mt-6 object-cover opacity-90">
            <div className="h-[calc(100dvh-300px)] flex flex-col justify-center items-center">
                <motion.h2
                    className="text-white text-6xl font-medium tracking-wider"
                    animate={{
                        color: [
                            "var(--color-accent)",
                            "#ffffff",
                            "var(--color-accent)",
                        ],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    Your Personal Library
                </motion.h2>

                <motion.h5
                    style={{
                        backgroundImage:
                            "linear-gradient(90deg, var(--color-accent), #ffffff, var(--color-accent))",
                        backgroundSize: "200% auto",
                    }}
                    animate={{
                        backgroundPosition: ["0% center", "200% center"],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="bg-clip-text text-transparent text-3xl font-light tracking-wide"
                >
                    Always within reach
                </motion.h5>
            </div>
        </div>
    );
};

export default Banner;
