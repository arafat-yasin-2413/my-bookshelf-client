import React, { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";
import LoaderSpinner from "../LoadingSpinner/LoaderSpinner";
import BookCard from "../BookCard/BookCard";
import { Link } from "react-router";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const { loading, setLoading } = use(AuthContext);
    const [books, setBooks] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("");

    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_API_URL}/categories`)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
                setLoading(false);
                // console.log(data);
            })
            .catch((error) => {
                toast.error("Failed to fetch categories : ", error);
                setLoading(false);
            });
    }, []);

    return (
        <>

            <div className="mx-auto gap-3 my-10">
                
                <div className="">
                    <div className="my-10 w-fit mx-auto">
                        <h2 className="text-xl text-center my-4 text-gray-800 font-medium">
                            All categories
                            <span className="font-bold">
                                ({categories.length ? categories.length : 0}){" "}
                            </span>
                        </h2>
                        <div className="flex-wrap md:flex gap-3 space-x-2">
                            {loading ? (
                                <LoaderSpinner></LoaderSpinner>
                            ) : (
                                categories.length > 0 &&
                                categories.map((category, idx) => (
                                    <Link to={`/books/category/${category}`}
                                        className={`btn btn-sm bg-white text-base rounded-2xl border border-gray-500
                                
                                    ${
                                        currentCategory === category
                                            ? "bg-black text-gray-800"
                                            : "bg-gray-100 hover:bg-black  hover:text-white"
                                    } 
                                `}
                                        key={idx}
                                    >
                                        {category}
                                    </Link>
                                ))
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Categories;
