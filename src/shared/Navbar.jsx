import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "/assets/logo.png";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { RiH5 } from "react-icons/ri";

const Navbar = () => {
    const { logOutUser, user } = use(AuthContext);
    // console.log("user data in navbar : ", user);

    const handleLogout = () => {
        logOutUser()
            .then(() => {
                toast.success("You have Logged Out Successfully");
            })
            .catch((error) => {
                toast.error(error);
            });
    };

    const links = (
        <>
            <li>
                <NavLink
                    className="nav text-sm text-white font-medium transition hover:text-teal-700 hover:bg-white hover:p-1 rounded-xl"
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav text-sm text-white font-medium transition hover:text-teal-700 hover:bg-white hover:p-1 rounded-xl"
                    to="/bookshelf"
                >
                    Bookshelf
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav text-sm text-white font-medium transition hover:text-teal-700 hover:bg-white hover:p-1 rounded-xl"
                    to="/addBook"
                >
                    Add Book
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav text-sm text-white font-medium transition hover:text-teal-700 hover:bg-white hover:p-1 rounded-xl"
                    to={`/myBooks`}
                >
                    My Books
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav text-sm text-white font-medium transition hover:text-teal-700 hover:bg-white hover:p-1 rounded-xl"
                    to="/profile"
                >
                    Profile
                </NavLink>
            </li>
        </>
    );

    const authOptions = (
        <>
            <Link
                to="/register"
                className="btn h-8 w-18 text-sm bg-teal-700 text-white hover:bg-white hover:text-teal-700"
            >
                Register
            </Link>
            <Link
                to="/login"
                className="btn h-8 w-18 text-sm bg-teal-700 text-white hover:bg-white hover:text-teal-700"
            >
                Login
            </Link>
        </>
    );

    const logOutOption = (
        <>
            <button
                onClick={handleLogout}
                className="btn h-8 w-18 text-sm bg-red-700 text-white hover:bg-white hover:text-red-700"
            >
                Logout
            </button>
        </>
    );

    const userIconOption = (
        <>
            <div className="">
                <img
                    referrerPolicy="no-referrer"
                    className="w-8 rounded-full"
                    src={user?.photoURL}
                    alt="user image"
                />
            </div>
        </>
    );

    return (
        <>
            <div className="navbar bg-teal-600 text-white shadow-sm justify-between sticky top-0 z-50">
                
                <div className="navbar-start  w-fit">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />{" "}
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-600 rounded-box z-1 mt-3 w-36 p-2 shadow"
                        >
                            {links}


                            {user ? userIconOption : ""}

                        {user ? logOutOption : authOptions}



                        </ul>
                    </div>

                    <div>
                        <Link className="flex justify-center items-center gap-2">
                            <img className="w-8" src={logo} alt="logo" />
                            <span className="text-2xl font-semibold text-white">
                                Bookshelf
                            </span>
                        </Link>
                    </div>
                </div>

                {/* <div className="navbar-center border border-green-400 hidden sm:flex">
                    <h5 className="text-xs">
                        {user && user?.email}
                    </h5>
                </div> */}

                <div className="navbar-end hidden lg:flex w-fit gap-4">

                    <ul className="flex gap-3">{links}</ul>

                    <div className="flex gap-2 justify-center items-center">
                        {user ? userIconOption : ""}

                        {user ? logOutOption : authOptions}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
