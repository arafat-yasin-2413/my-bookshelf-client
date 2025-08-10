import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const NavLinks = () => {
    const { user } = use(AuthContext);

    return (
        <>
            <li>
                <NavLink
                    className="nav text-sm text-primary font-medium hover:bg-white hover:p-1 transition-all duration-300 ease-in-out rounded-xl"
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav text-sm text-primary font-medium hover:bg-white hover:p-1 transition-all duration-300 ease-in-out rounded-xl"
                    to="/bookshelf"
                >
                    Bookshelf
                </NavLink>
            </li>
            {user && (
                <>
                    <li>
                        <NavLink
                            className="nav text-sm text-primary font-medium hover:bg-white hover:p-1 transition-all duration-300 ease-in-out rounded-xl"
                            to="/addBook"
                        >
                            Add Book
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="nav text-sm text-primary font-medium hover:bg-white hover:p-1 transition-all duration-300 ease-in-out rounded-xl"
                            to={`/myBooks`}
                        >
                            My Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="nav text-sm text-primary font-medium hover:bg-white hover:p-1 transition-all duration-300 ease-in-out rounded-xl"
                            to="/profile"
                        >
                            Profile
                        </NavLink>
                    </li>
                </>
            )}

            <li>
                <NavLink
                    className="nav text-sm text-primary font-medium hover:bg-white hover:p-1 transition-all duration-300 ease-in-out rounded-xl"
                    to="/about"
                >
                    About Us
                </NavLink>
            </li>
        </>
    );
};

export default NavLinks;
