import React, { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";
import LoaderSpinner from "../LoadingSpinner/LoaderSpinner";
import BookCard from "../BookCard/BookCard";
import { Link } from "react-router";
import Container from "../../container/Container";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { motion } from "framer-motion";

const Categories = () => {
    const [books, setBooks] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("");
    const { loading, setLoading } = use(AuthContext);
    const axiosInstance = useAxios();

    const {
        data: categories = [],
        isLoading: categoriesLoading,
        isError: categoriesError,
    } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axiosInstance.get("/categories");
            return res.data;
        },
    });

    // console.log(categories);

    useEffect(() => {
        fetchAllBooks();
    }, []);

    const fetchAllBooks = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/allBooks`);
            const data = await res.json();
            setBooks(data);
        } catch (error) {
            toast.error("Failed to fetch all books!");
        } finally {
            setLoading(false);
        }
    };

    // console.log("all books", books);

    const fetchBookByCategory = async (category) => {
        setLoading(true);
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/books/category/${category}`
            );
            const data = await res.json();
            setBooks(data);
        } catch (error) {
            toast.error("Failed to fetch category-wise books");
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryClick = (category) => {
        // console.log(category);
        setCurrentCategory(category);
        if (category === "All") {
            fetchAllBooks();
        } else {
            fetchBookByCategory(category);
        }
    };

    if (categoriesLoading) return <LoaderSpinner></LoaderSpinner>;

    if (categoriesError)
        return (
            <p className="text-center text-red-500 my-8">
                Failed to Load Categories
            </p>
        );

    return (
        <>
            <section className="bg-white">
                <Container>

                    <motion.h2
                    className="text-4xl text-primary py-6 font-semibold"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                >
                    Browse All Books
                </motion.h2>


                    <div className="gap-3 pb-4">
                        <div className="flex gap-3 flex-wrap">
                            
                                <button
                                    onClick={() => handleCategoryClick("All")}
                                    className={`btn rounded-md border 
                        ${
                            currentCategory === "All"
                                ? "bg-accent text-white"
                                : "bg-gray-200"
                        }`}
                                >
                                    All
                                </button>
                            
                            {categories.map((cat) => (
                                <button
                                    key={cat._id || cat}
                                    onClick={() => handleCategoryClick(cat)}
                                    className={`btn rounded-md border 
                            ${
                                currentCategory === cat
                                    ? "bg-accent text-white"
                                    : "bg-gray-200"
                            }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* book showing section */}
            {loading && <LoaderSpinner />}

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4 mb-10">
                    {books.map((book) => (
                        <BookCard key={book._id} book={book}></BookCard>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Categories;
