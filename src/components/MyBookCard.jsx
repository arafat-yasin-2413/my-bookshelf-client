import React from "react";
import { BiUpvote } from "react-icons/bi";
import { Link } from "react-router";

const MyBookCard = ({ book }) => {
    const { _id, bookTitle, coverPhoto, bookAuthor, bookCategory, upvotedBy, userEmail } = book || {};

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img src={`${coverPhoto}`} alt={`image of ${bookTitle}`} />
            </figure>

            <div className="flex items-center gap-2">
                <button
                
                    className="btn bg-gray-300 rounded"
                >
                    <BiUpvote size={20}></BiUpvote>
                </button>

                <div>
                    <h5 className="text-xl">{upvotedBy.length}</h5>
                </div>
            </div>

            <div className="card-body">
                <h2 className="card-title">{bookTitle}</h2>
                <p>Author : {bookAuthor}</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">{bookCategory}</div>
                </div>

                <div>
                    <Link to={`/bookDetails/${_id}`} className="btn">
                        See Details
                    </Link>
                </div>

                <div>
                    <p>
                        Added by : {userEmail}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyBookCard;
