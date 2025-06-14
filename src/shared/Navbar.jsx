import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from '/assets/logo.png';
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
    const {logOutUser, user } = use(AuthContext);

    

    const handleLogout = () =>{
        logOutUser()
        .then(()=>{
            toast.success('You have Logged Out Successfully');
        })
        .catch(error=>{
            toast.error(error);
        })
        
    }


    const links = <>
    
        <li><NavLink className="nav bg-base-100" to="/">Home</NavLink></li>
        <li><NavLink className="nav bg-base-100" to="/bookshelf">Bookshelf</NavLink></li>
        <li><NavLink className="nav bg-base-100" to="/addBook">Add Book</NavLink></li>
        <li><NavLink className="nav bg-base-100" to="/cc">My Books</NavLink></li>
        <li><NavLink className="nav bg-base-100" to="/profile">Profile</NavLink></li>
    
    </>

    return (
        <div className="navbar bg-primary-content shadow-sm rounded sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 gap-2 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Link to="/" className=" text-xl font-bold flex items-center gap-2"><img className="w-8" src={logo} alt="" /> Bookshelf</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                   {links}
                </ul>

                <div>
                    <p>
                        {user?.email}
                    </p>
                </div>


                
            </div>
            <div className="navbar-end gap-2">

                <Link to="/login" className="btn">Login</Link>
                <button onClick={handleLogout} className="btn">Logout</button>
                <Link to="/register" className="btn">Register</Link>



            </div>
        </div>
    );
};

export default Navbar;
