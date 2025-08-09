import React from 'react';
import { NavLink } from 'react-router';

const NavLinks = () => {
    return (
        <>
         <li>
                <NavLink
                    className="nav text-sm text-primary font-medium transition hover:text-teal-700 hover:bg-white hover:p-1 rounded-xl"
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav text-sm text-primary font-medium transition hover:text-teal-700 hover:bg-white hover:p-1 rounded-xl"
                    to="/bookshelf"
                >
                    Bookshelf
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav text-sm text-primary font-medium transition hover:text-teal-700 hover:bg-white hover:p-1 rounded-xl"
                    to="/addBook"
                >
                    Add Book
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav text-sm text-primary font-medium transition hover:text-teal-700 hover:bg-white hover:p-1 rounded-xl"
                    to={`/myBooks`}
                >
                    My Books
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav text-sm text-primary font-medium transition hover:text-teal-700 hover:bg-white hover:p-1 rounded-xl"
                    to="/profile"
                >
                    Profile
                </NavLink>
            </li>   
        </>
    );
};

export default NavLinks;