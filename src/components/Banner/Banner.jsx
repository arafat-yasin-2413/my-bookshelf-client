import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="bg-[url(/assets/banner-images/book-banner-static.jpg)] bg-cover bg-center w-full mt-24 object-cover opacity-90">
            <div className="h-96 lg:h-[calc(100dvh-300px)] flex flex-col justify-center items-center">
                <motion.h2
                    className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-wider"
                    style={{
                        WebkitTextStroke: "1px var(--color-accent)",
                    }}
                    animate={{
                        WebkitTextStrokeColor: [
                            "var(--color-accent)",
                            "#60a5fa",
                            "var(--color-accent)",
                        ],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    Your Personal Library
                </motion.h2>

                <motion.h5
                    style={{
                        backgroundImage:
                            "linear-gradient(90deg, #fef3c7, #ffffff, #fef3c7)",
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
                    className="bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-medium tracking-wide"
                >
                    Always within reach
                </motion.h5>
            </div>
        </div>
    );
};

export default Banner;
