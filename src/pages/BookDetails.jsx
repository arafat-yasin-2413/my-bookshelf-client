import React, { useEffect } from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const BookDetails = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "Book Details";
    }, [location.pathname]);

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
        <>
            <div className="flex items-center gap-2">
                <img src={coverPhoto} alt={`image of ${bookTitle}`} />

                <div className="gap-2 flex">
                    <Link
                        to={`/updateBook/${_id}`}
                        className="btn text-xl bg-blue-400"
                    >
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

            <div className="grid grid-cols-8 w-5xl mx-auto my-16 ">
                
                <div className="col-span-3">
                    
                    <div>
                        <img
                            className="rounded-tr-2xl rounded-br-2xl shadow-2xl w-4/5"
                            src={coverPhoto}
                            alt={`image of ${bookTitle}`}
                        />
                    </div>

                    <div className="my-4 flex">

                        <button className="btn bg-success rounded-l-full">TODO: dynamic status</button>
                        <button className="btn bg-success rounded-r-full">
                            <MdKeyboardArrowDown
                                size={30}
                            ></MdKeyboardArrowDown>
                        </button>
                    </div>

                    <div>
                        <p className="text-xl font-medium">
                            Upvotes : 0
                        </p>
                    </div>
                </div>

                <div className="col-span-5">
                    
                    <h2 className="text-2xl md:text-4xl font-semibold ">
                        {bookTitle}
                    </h2>

                    <p className="text-xl text-gray-500 my-3">
                        {bookAuthor}
                    </p>


                    <div className="flex gap-4">
                        <p className="text-xl font-medium">
                            Upvotes : 0
                        </p>

                        <p className="text-gray-500">
                            4 reviews
                        </p>
                    </div>


                    <p className="text-gray-600 text-base mt-4">
                        {totalPage} pages
                    </p>

                    <p className="text-gray-600 text-base mb-6">
                        Published {publishingYear}
                    </p>

                    <p className="text-justify font-semibold">
                        {bookOverview}
                    </p>


                </div>
            </div>
        </>
    );
};

export default BookDetails;
