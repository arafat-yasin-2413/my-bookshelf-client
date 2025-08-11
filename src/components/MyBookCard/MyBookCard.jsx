import React, { use } from "react";
import { BiUpvote } from "react-icons/bi";
import { FaEdit, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";

const MyBookCard = ({ book }) => {
    const {
        _id,
        bookTitle,
        coverPhoto,
        bookAuthor,
        bookCategory,
        upvotedBy,
        userEmail,
    } = book || {};
    const navigate = useNavigate();
    const { user } = use(AuthContext);

    const handleDeleteBook = (id) => {
        // console.log("id paisi : ", id);

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
                        // console.log("after delete : ", data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                timer: 1500,
                            });

                            navigate(`/myBooks/${user?.email}`);
                        }
                    });
            }
        });
    };

    return (
        <div className="shadow rounded-xl">
            <figure className="bg-white rounded-xl w-full flex justify-center">
                <img
                    className="w-48 px-8 py-4 object-cover"
                    src={`${coverPhoto}`}
                    alt={`image of ${bookTitle}`}
                />
            </figure>

            <div className="flex flex-col justify-start p-4">
                <div className="bg-secondary flex justify-start w-fit items-center px-0.5 mb-1">
                    <button className="p-1 text-primary rounded">
                        <BiUpvote className="text-base"></BiUpvote>
                    </button>

                    <div>
                        <h5 className="text-[1rem] font-semibold">
                            {upvotedBy.length}
                        </h5>
                    </div>
                </div>

                <div className="">
                    <h3 className="text-[1.1rem] font-medium mb-1">
                        {bookTitle}
                    </h3>
                    <h4 className="text-gray-500 text-[0.9rem] tracking-wider mb-1">
                        {bookAuthor}
                    </h4>
                    <h5 className="text-[0.9rem] text-primary tracking-wider bg-white w-fit px-3 py-1 rounded-full outline outline-secondary mb-2">
                        {bookCategory}
                    </h5>

                    {/* update delete */}
                    <div className="gap-1 flex mb-2">
                        <Link
                            to={`/updateBook/${_id}`}
                            className="bg-white px-2 py-1 shadow hover:bg-secondary rounded"
                        >
                            <FaEdit className="text-xl text-accent"></FaEdit>
                        </Link>

                        <button
                            onClick={() => handleDeleteBook(_id)}
                            className="px-2 py-1 bg-white shadow cursor-pointer hover:bg-secondary rounded"
                        >
                            <MdDelete className="text-accent text-xl"></MdDelete>
                        </button>
                    </div>

                    <div className="bg-white w-fit px-1 py-0.5 rounded shadow text-primary hover:bg-primary hover:text-white">
                        <Link to={`/bookDetails/${_id}`}
                            className="flex items-center gap-1">
                            <span className="">See Details</span>
                            <span><FaRegEye className=""></FaRegEye></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookCard;
