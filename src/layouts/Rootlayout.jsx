import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Rootlayout = () => {
    return (
        <>
            <Navbar></Navbar>

            <div className="max-w-11/12 mx-auto">
                {/* <Navbar></Navbar> */}
                <Outlet></Outlet>
            </div>
            
            
            <Footer></Footer>
        </>
    );
};

export default Rootlayout;
