import React from "react";
import { BiUpvote } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
    const { _id, bookTitle, coverPhoto, bookAuthor, bookCategory, upvotedBy } =
        book || {};

    return (
        // main div
        <div className="shadow rounded-xl w-full flex flex-col ">
            {/* image div */}
            <div className="bg-white rounded-t-xl w-full flex justify-center items-center">
                <img
                    className="w-32 py-4 px-4"
                    src={coverPhoto}
                    alt={`image of ${bookTitle}`}
                />
            </div>
            {/* content div */}
            <div className="mt-2 px-2 py-4">
                <p className="mb-2 flex items-center bg-accent/20 w-fit px-1 py-0.5 rounded">
                    <BiUpvote className="text-accent"></BiUpvote>
                    <span className="text-[0.8rem] font-semibold">
                        {upvotedBy.length}
                    </span>
                </p>
                <h3 className="text-[1.25rem] font-medium mb-2">{bookTitle}</h3>
                <h4 className="text-[0.8rem] text-accent mb-2">
                    {bookAuthor}
                </h4>

                <div className="flex items-center gap-2">
                    <h5 className="text-primary bg-white w-fit px-3 py-0.5 rounded-xl outline outline-secondary">
                        {bookCategory}
                    </h5>


                    <Link
                        to={`/bookDetails/${_id}`}
                        className="flex w-fit items-center gap-1 px-3 py-0.5 bg-white rounded-xl shadow text-primary hover:bg-primary hover:text-white"
                    >
                        <span className="">See Details</span>
                        <span>
                            <FaRegEye className=""></FaRegEye>
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default BookCard;
