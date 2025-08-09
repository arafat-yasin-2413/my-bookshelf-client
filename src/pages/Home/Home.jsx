import React, { useEffect } from "react";
import Categories from "../../components/Categories/Categories";
import { useLocation } from "react-router";
import Top6Books from "../../components/TopBooks/TopBooks";
import Slider from "../../components/Slider/Slider";
import { motion } from "framer-motion";
import { FaQ } from "react-icons/fa6";
import Blog from "../../components/Blog/Blog";
import FAQ from "../../components/FAQ/FAQ";
import Banner from "../../components/Banner/Banner";

const Home = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "Home";
    }, [location.pathname]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <Banner></Banner>


            <Slider></Slider>

            <Categories></Categories>

            <Top6Books></Top6Books>

        </motion.div>
    );
};

export default Home;
