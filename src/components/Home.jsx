import React, { useEffect } from 'react';
import Categories from './Categories';
import { useLocation } from 'react-router';
import Top6Books from './TopBooks';
import Slider from './Slider';
import { motion } from 'framer-motion';
import { FaQ } from 'react-icons/fa6';
import FAQ from './FAQ';

const Home = () => {
    const location = useLocation();
    useEffect(()=>{
        document.title = "Home";
    },[location.pathname])

    return (
        <motion.div 
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -30}}
            transition={{duration: 0.5, ease: "easeOut"}}
        >
            

            <Slider></Slider>


            <Categories></Categories>

            <Top6Books></Top6Books>

            <FAQ></FAQ>
        </motion.div>
    );
};

export default Home;