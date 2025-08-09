import React from "react";
import { BiUpvote } from "react-icons/bi";
import { Link } from "react-router";

const BookCard = ({ book }) => {
    const { _id, bookTitle, coverPhoto, bookAuthor, bookCategory, upvotedBy } =
        book || {};

    return (
        <div className="rounded-lg p-4 bg-gray-50 shadow-xs shadow-indigo-100">
            <div className="w-fit mx-auto">
                <div className="w-fit mx-auto">
                    <img
                        alt={`image of ${bookTitle}`}
                        src={coverPhoto}
                        className="rounded-md object-cover w-36"
                    />

                </div>

                <div className="mt-2">
                    <div>
                        

                        <div>
                            <h4 className="font-medium text-[1.5rem] text-gray-900">
                                {bookTitle}
                            </h4>
                        </div>

                        <div>
                            <p className="text-gray-500 text-[0.8rem]">
                                Author : {bookAuthor}
                            </p>
                        </div>

                        <div className="mt-2">
                            <p className="flex items-center bg-base-300 w-fit px-2 rounded outline outline-teal-200">

                            <BiUpvote></BiUpvote> {upvotedBy.length}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-8 text-xs">

                        <div>
                            <span className="rounded-full bg-gray-500 px-2.5 py-0.5 text-sm whitespace-nowrap text-white">
                                {bookCategory}
                            </span>
                        </div>

                        <div>
                            <Link to={`/bookDetails/${_id}`} className="cursor-pointer rounded-full bg-teal-600 hover:bg-blue-500 text-white px-2.5 py-0.5 text-sm">
                                See Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div className="card bg-base-100 shadow-sm">
        //     <figure>
        //         <img src={`${coverPhoto}`} alt={`image of ${bookTitle}`} />
        //     </figure>

        //     <div className="flex items-center gap-2">
        //         <button

        //             className="btn bg-gray-300 rounded"
        //         >
        //             <BiUpvote size={20}></BiUpvote>
        //         </button>

        //         <div>
        //             <h5 className="text-xl">{upvotedBy.length}</h5>
        //         </div>
        //     </div>

        //     <div className="card-body">
        //         <h2 className="card-title">{bookTitle}</h2>
        //         <p>Author : {bookAuthor}</p>
        //         <div className="card-actions justify-start">
        //             <div className="badge badge-outline">{bookCategory}</div>
        //         </div>

        //         <div>
        //             <Link to={`/bookDetails/${_id}`} className="btn">
        //                 See Details
        //             </Link>
        //         </div>
        //     </div>
        // </div>
    );
};

export default BookCard;
