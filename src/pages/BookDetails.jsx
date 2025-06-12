import React from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const BookDetails = () => {
    const bookData = useLoaderData();
    const navigate = useNavigate();
    // TODO: user email, name niye ashte hobe
    const {
        _id,
        bookTitle,
        coverPhoto,
        bookAuthor,
        totalPage,
        bookCategory,
        readingStatus,
        bookOverview,
        publishingYear,
    } = bookData || {};

    const handleDeleteBook = (id) => {
        console.log("id paisi : ", id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                // delete functionality here
                fetch(`${import.meta.env.VITE_API_URL}/book/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("after delete : ", data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                timer: 1500,
                            });

                            navigate("/bookshelf");
                        }
                    });
            }
        });
    };
    return (
        <div className="my-10 border-4 border-red-200 p-2">
            <div className="flex items-center gap-2">
                <img src={coverPhoto} alt={`image of ${bookTitle}`} />

                <div className="gap-2 flex">
                    <Link to={`/updateBook/${_id}`} className="btn text-xl bg-blue-400">
                        <FaEdit></FaEdit>
                    </Link>
                    <button
                        onClick={() => handleDeleteBook(_id)}
                        className="btn text-xl bg-red-400"
                    >
                    
                        <MdDelete></MdDelete>
                    </button>
                </div>
            </div>

            <div className="my-4 flex gap-2 items-center">
                <p>Upvotes</p>

                <p className="bg-gray-300 rounded flex items-center p-1 text-xl gap-1">
                    <BiSolidUpvote></BiSolidUpvote> <span>0</span>
                </p>
            </div>

            <div>
                <p>{bookTitle}</p>
                <p>Author: {bookAuthor}</p>
                <p>Total Page : {totalPage}</p>
                <p>Publishing year : {publishingYear}</p>
                <p>Category : {bookCategory}</p>
                <p>Reading status : {readingStatus}</p>
                <p>Book overview : {bookOverview}</p>
            </div>
        </div>
    );
};

export default BookDetails;
