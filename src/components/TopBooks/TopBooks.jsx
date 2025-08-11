import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BookCard from "../BookCard/BookCard";
import { motion } from "framer-motion";
import Container from "../../container/Container";

const Top6Books = () => {
    const initialTopBooks = useLoaderData();
    const [topBooks, setTopBooks] = useState(initialTopBooks);

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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-6 ">
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
