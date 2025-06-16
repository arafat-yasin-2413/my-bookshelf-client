import React, { use } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Review = ({ singleReview, allReviews, setReviews, book }) => {
    console.log(singleReview);
    const navigate = useNavigate();
    const { user } = use(AuthContext);
    const { _id, review, email, name, photoURL, createdAt } =
        singleReview || {};

    const handleDeleteReview = (id) => {
        console.log("id paisi : ", id);

        if (email !== user?.email) {
            return toast.error("This is not your review");
        }

        if (email === user?.email) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete this Review!",
            }).then((result) => {
                if (result.isConfirmed) {
                    // delete functionality here
                    fetch(
                        `${import.meta.env.VITE_API_URL}/deleteReview/${_id}`,
                        {
                            method: "DELETE",
                        }
                    )
                        .then((res) => res.json())
                        .then((data) => {
                            console.log("after delete : ", data);
                            if (data.deletedCount) {
                                // navigate(`/bookDetails/${book._id}`);
                                setReviews((oldReviews)=>
                                    oldReviews.filter ((review) => review._id !== _id)
                                );
                                
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your review has been deleted.",
                                    icon: "success",
                                    timer: 1500,
                                });
                            }
                        });
                }
            });
        }
    };

    return (
        <div className="">
            {/* <h2>{email}</h2> */}

            <div className="flex items-center gap-6 my-4 p-6 border rounded">
                {/* user image and name */}
                <div className="flex flex-col justify-center items-center">
                    <img
                        className="w-12 rounded-full"
                        src={photoURL}
                        alt={`image of ${name}`}
                    />

                    <h2>{name}</h2>
                </div>
                {/* review text */}
                <div>
                    <h4 className="flex justify-end ">{createdAt}</h4>
                    <p>{review}</p>

                    <div className="flex justify-end gap-4">
                        <p className="btn">update</p>
                        <p
                            onClick={() => handleDeleteReview(_id)}
                            className="btn"
                        >
                            delete
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-b border-sky-200 my-4"></div>
        </div>
    );
};

export default Review;
