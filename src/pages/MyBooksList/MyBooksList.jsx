import React, { use } from "react";
import MyBookCard from "../../components/MyBookCard/MyBookCard";

const MyBooksList = ({ myBooksPromise }) => {
    const myBooks = use(myBooksPromise);

    // console.log(myBooks);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {myBooks.length > 0 ? (
                myBooks.map((book) => (
                    <MyBookCard key={book._id} book={book}></MyBookCard>
                ))
            ) : (
                <div className="">
                    {" "}
                    <p className="text-4xl text-center my-10 bg-secondary p-3">
                        No books found.
                    </p>
                </div>
            )}
        </div>
    );
};

export default MyBooksList;
