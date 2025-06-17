import React, { useEffect } from 'react';
import Categories from './Categories';
import { useLocation } from 'react-router';
import Top6Books from './TopBooks';
import Slider from './Slider';

const Home = () => {
    const location = useLocation();
    useEffect(()=>{
        document.title = "Home";
    },[location.pathname])

    return (
        <div>
            

            <Slider></Slider>


            <Categories></Categories>

            <Top6Books></Top6Books>
        </div>
    );
};

export default Home;