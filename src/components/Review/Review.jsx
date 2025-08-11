import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const Review = ({ singleReview, allReviews, setReviews, book }) => {
    const { user } = use(AuthContext);
    const { _id, review, email, name, photoURL, createdAt } = singleReview || {};
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [updateReviewText, setUpdateReviewText] = useState(review);

    // whenever the review text changes, sync it to updateReviewText state
    useEffect(() => {
        setUpdateReviewText(review);
    }, [review]);

    // Handle updating review
    const handleUpdateReview = (e) => {
        e.preventDefault();

        if (email !== user?.email) {
            return toast.error("Not your review to update");
        }

        fetch(`${import.meta.env.VITE_API_URL}/updateReview/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ review: updateReviewText }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Review updated successfully!");

                    // update UI
                    setReviews((prevReviews) =>
                        prevReviews.map((item) =>
                            item._id === _id
                                ? { ...item, review: updateReviewText }
                                : item
                        )
                    );

                    setIsUpdateModalOpen(false);
                } else {
                    toast.error("Failed to update review.");
                }
            })
            .catch((err) => {
                // console.error(err);
                toast.error("Error updating review.");
            });
    };

    // Handle deleting review
    const handleDeleteReview = (id) => {
        if (email !== user?.email) {
            return toast.error("This is not your review");
        }

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
                fetch(`${import.meta.env.VITE_API_URL}/deleteReview/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            // remove from UI
                            setReviews((oldReviews) =>
                                oldReviews.filter((review) => review._id !== _id)
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
    };

    return (
        <>
            <div className="flex items-center gap-6 my-4 p-6 border rounded">
                {/* user image and name */}
                <div className="flex flex-col justify-center items-center">
                    <img className="w-12 rounded-full" src={photoURL} alt={`image of ${name}`} />
                    <h2>{name}</h2>
                </div>

                {/* review text */}
                <div className="flex-1">
                    <h4 className="flex justify-end text-xs text-gray-500">{createdAt}</h4>
                    <p>{review}</p>

                    {user?.email === email && (
                        <div className="flex justify-end gap-4 mt-2">
                            <button onClick={() => setIsUpdateModalOpen(true)} className="btn">
                                Update
                            </button>
                            <button onClick={() => handleDeleteReview(_id)} className="btn">
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="border-b border-sky-200 my-4"></div>

            {/* Update Modal */}
            {isUpdateModalOpen && (
                <dialog id="update_modal" className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">Update Review</h3>

                        <form onSubmit={handleUpdateReview}>
                            <fieldset className="mb-4">
                                <label className="text-sm mb-1 block">Edit your review</label>
                                <textarea
                                    className="textarea h-24 w-full"
                                    name="review"
                                    value={updateReviewText}
                                    onChange={(e) => setUpdateReviewText(e.target.value)}
                                    required
                                ></textarea>
                            </fieldset>

                            <div className="modal-action">
                                <input className="btn" type="submit" value="Update" />
                                <button
                                    type="button"
                                    className="btn btn-ghost"
                                    onClick={() => setIsUpdateModalOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </>
    );
};

export default Review;
