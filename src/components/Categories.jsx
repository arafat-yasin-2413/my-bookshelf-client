import React, { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import LoaderSpinner from "./LoaderSpinner";
import BookCard from "./BookCard";
import { useNavigate, useParams } from "react-router";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const { loading, setLoading } = use(AuthContext);
    const [books, setBooks] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("");
    const { categoryName } = useParams();
    const navigate = useNavigate();

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

    useEffect(() => {
        if (categoryName) {
            setLoading(true);
            fetch(`${import.meta.env.VITE_API_URL}/books/category/${categoryName}`)
                .then((res) => res.json())
                .then((data) => {
                    setBooks(data);
                    setLoading(false);
                })
                .catch((error) => {
                    toast.error("Failed to load books",error);
                    setLoading(false);
                });
        } 
        else {
            setBooks([]);  // Clear when no category selected
        }
    }, [categoryName]);

    const handleCategoryClick = (category) => {
        navigate(`/categories/${category}`);
    }


    return (
        <>
            <div className="my-10">
                <h2>
                    Showing All categories{" "}
                    <span className="font-bold">
                        ({categories.length ? categories.length : 0}){" "}
                    </span>
                </h2>
                <div className="flex flex-wrap gap-3">
                    {loading ? (
                        <LoaderSpinner></LoaderSpinner>
                    ) : (
                        categories.length > 0 &&
                        categories.map((category, idx) => (
                            <button
                                onClick={() =>
                                    handleCategoryClick(category)
                                }
                                className={`btn  text-xl px-16 py-10 rounded-2xl
                                
                                    ${
                                        currentCategory === category
                                            ? "bg-black text-white"
                                            : "bg-blue-200 hover:bg-black  hover:text-white"
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
                            <BookCard key={book._id} book={book}></BookCard>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Categories;
