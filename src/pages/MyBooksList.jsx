import React, { use } from "react";
import MyBookCard from "../components/MyBookCard";

const MyBooksList = ({ myBooksPromise }) => {
    const myBooks = use(myBooksPromise);

    console.log(myBooks);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            
            {myBooks.length > 0 ? (
                myBooks.map((book) => (
                    <MyBookCard key={book._id} book={book}></MyBookCard>
                ))
            ) : (
                <p>No books found.</p>
            )}
        </div>
    );
};

export default MyBooksList;
