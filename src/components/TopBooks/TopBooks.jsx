import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BookCard from "../BookCard/BookCard";
import { motion } from "framer-motion";
import Container from "../../container/Container";
import { useQuery } from "@tanstack/react-query";
import LoaderSpinner from "../LoadingSpinner/LoaderSpinner";

const Top6Books = () => {
    const { data : topBooks = [], isLoading, isError } = useQuery({
        queryKey: ["topBooks"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/books/top`);
            return res.json();
        },
    });

    if (isLoading) return <LoaderSpinner></LoaderSpinner>

    if (isError) return <div className="flex justify-center items-center my-10"> <div className="text-center text-2xl font-semibold bg-red-400 p-4 rounded-md w-fit">Failed to load top Books.</div></div>



    return (
        <Container>
            <div className="rounded-2xl my-10">
                <motion.h2
                    className="text-4xl text-primary my-10 font-semibold"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                >
                    Top Books
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 ">
                    {topBooks.length > 0 &&
                        topBooks.map((book) => (
                            <BookCard key={book._id} book={book}></BookCard>
                        ))}
                </div>
            </div>
        </Container>
    );
};

export default Top6Books;
