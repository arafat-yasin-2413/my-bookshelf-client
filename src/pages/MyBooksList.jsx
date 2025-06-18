import React, { use } from "react";
import MyBookCard from "../components/MyBookCard";

const MyBooksList = ({ myBooksPromise }) => {
    const myBooks = use(myBooksPromise);

    // console.log(myBooks);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {myBooks.length > 0 ? (
                myBooks.map((book) => (
                    <MyBookCard key={book._id} book={book}></MyBookCard>
                ))
            ) : (
                <div className="">
                    {" "}
                    <p className="text-4xl text-center my-10 bg-teal-100 p-3">
                        No books found.
                    </p>
                </div>
            )}
        </div>
    );
};

export default MyBooksList;
