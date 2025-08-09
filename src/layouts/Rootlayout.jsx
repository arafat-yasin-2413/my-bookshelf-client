import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Container from "../container/Container";

const Rootlayout = () => {
    return (
        <>
            <Navbar></Navbar>

            <section className="bg-red-200">
                <Outlet></Outlet>
            </section>

            <Footer></Footer>
        </>
    );
};

export default Rootlayout;
