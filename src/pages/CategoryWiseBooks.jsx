import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import BookCard from "../components/BookCard";

const CategoryWiseBooks = () => {
    const cat = useParams();
    // console.log(cat.categoryName);
    const categoryWiseBooks = useLoaderData();
    console.log(categoryWiseBooks);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gray-100 rounded-2xl p-6 my-10">
        
            <div>
                <h2 className="text-3xl text-gray-700 font-semibold">
                    Found {categoryWiseBooks.length} "{cat.categoryName}" books
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-4">
                    {categoryWiseBooks.length > 0 &&
                        categoryWiseBooks.map((book) => (
                            <BookCard key={book._id} book={book}></BookCard>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryWiseBooks;
