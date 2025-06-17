import React, { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import LoaderSpinner from "./LoaderSpinner";
import BookCard from "./BookCard";

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

    const handleCategoryWiseBooks = async (categoryName) => {
        setLoading(true);
        const res = await fetch(
            `${import.meta.env.VITE_API_URL}/books/category/${categoryName}`
        );
        const data = await res.json();
        setBooks(data);
        setCurrentCategory(categoryName);
        setLoading(false);
    };

    return (
        <>

        
            <div className="grid grid-cols-12 mx-auto gap-3 my-10">
                
                <div className="col-span-12 md:col-span-3 border">
                    <div className="my-10">
                        <h2 className="text-xl text-center my-4">
                            Showing All categories{" "}
                            <span className="font-bold">
                                ({categories.length ? categories.length : 0}){" "}
                            </span>
                        </h2>
                        <div className="flex flex-col gap-3">
                            {loading ? (
                                <LoaderSpinner></LoaderSpinner>
                            ) : (
                                categories.length > 0 &&
                                categories.map((category, idx) => (
                                    <button
                                        onClick={() =>
                                            handleCategoryWiseBooks(category)
                                        }
                                        className={`btn  text-base rounded-2xl
                                
                                    ${
                                        currentCategory === category
                                            ? "bg-black text-white"
                                            : "bg-gray-100 hover:bg-black  hover:text-white"
                                    } 
                                `}
                                        key={idx}
                                    >
                                        {category}
                                    </button>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-9 border">
                    <div>
                        <h2 className="text-4xl font-bold text-center my-4">
                            {currentCategory}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-6">
                            {loading ? (
                                <LoaderSpinner></LoaderSpinner>
                            ) : (
                                books.length > 0 &&
                                books.map((book) => (
                                    <BookCard
                                        key={book._id}
                                        book={book}
                                    ></BookCard>
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
