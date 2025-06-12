import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
    const { _id,bookTitle, coverPhoto, bookAuthor, bookCategory } = book || {};

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={`${coverPhoto}`}
                    alt={`image of ${bookTitle}`}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookTitle}

                </h2>
                <p>
                    Author : {bookAuthor}
                </p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">{bookCategory}</div>
                </div>

                <div>
                    <Link to={`/bookDetails/${_id}`} className="btn">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
