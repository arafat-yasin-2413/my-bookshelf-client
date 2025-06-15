import React, { use } from "react";
import { BiUpvote } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const MyBookCard = ({ book }) => {
    const { _id, bookTitle, coverPhoto, bookAuthor, bookCategory, upvotedBy, userEmail } = book || {};
    const navigate = useNavigate();
    const {user} = use(AuthContext);

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

                            navigate(`/myBooks/${user?.email}`);
                        }
                    });
            }
        });
    };



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


                {/* update delete */}
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
