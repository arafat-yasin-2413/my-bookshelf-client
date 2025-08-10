import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Container from "../container/Container";

const Rootlayout = () => {
    return (
        <section className="bg-base-200">
            <Navbar></Navbar>

            
            <Outlet></Outlet>
            

            <Footer></Footer>
        </section>
    );
};

export default Rootlayout;
