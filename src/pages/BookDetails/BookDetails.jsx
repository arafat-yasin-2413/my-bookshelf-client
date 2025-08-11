import React, { use, useEffect, useState } from "react";
import { BiSolidUpvote, BiUpvote } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { getCurrentDateFormatted } from "../../utils/getDate";
import LoaderSpinner from "../../components/LoadingSpinner/LoaderSpinner";
import Review from "../../components/Review/Review";
import Container from "../../container/Container";

const BookDetails = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "Book Details";
    }, [location.pathname]);
    const { loading, setLoading } = use(AuthContext);
    const bookData = useLoaderData();
    const navigate = useNavigate();
    // TODO: user email, name niye ashte hobe
    const { user } = use(AuthContext);

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
        upvotedBy,
        userEmail,
        userName,
    } = bookData || {};

    const [upvoteCount, setUpvoteCount] = useState(upvotedBy.length);
    const [date, setDate] = useState("");
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const formattedDate = getCurrentDateFormatted();
        setDate(formattedDate);
    }, []);

    // getting reviews
    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_API_URL}/reviews/${_id}`)
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                setLoading(false);
                // console.log(data);
            })
            .catch((error) => {
                toast.error("Failed to fetch reviews : ", error);
                setLoading(false);
            });
    }, [_id, setLoading]);

    // console.log(user?.email);
    // console.log(userEmail);
    // console.log('user email : ', user.email);
    // console.log('userEmail from books db : ', userEmail);

    const handleDeleteBook = (id) => {
        // console.log("id paisi : ", id);

        if (userEmail !== user?.email) {
            return toast.error("Not your book. Cannot Delete.");
        }

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

                            navigate("/bookshelf");
                        }
                    });
            }
        });
    };

    const handleUpvote = () => {
        if (!user) {
            return toast.error("You have to Login before upvoting.");
        }

        if (user?.email === userEmail) {
            return toast.error("You Cannot upvote your own book");
        }

        axios
            .patch(`${import.meta.env.VITE_API_URL}/upvote/${_id}`, {
                email: user?.email,
            })
            .then((data) => {
                // console.log(data.data);
                if (data.data.modifiedCount) {
                    toast.success("You have Liked the book Successfully");
                    setUpvoteCount((prev) => prev + 1);
                }
            })
            .catch((error) => {
                // console.log(error);
            });
    };

    const handleAddReview = (e) => {
        e.preventDefault();
        const form = e.target;

        const alreadyReviewed = reviews.some(
            (rev) => rev.email === user?.email
        );

        if (alreadyReviewed) {
            form.reset();
            return toast.error("You have already reviewed this book.");
        }

        const formData = new FormData(form);
        const reviewData = Object.fromEntries(formData.entries());

        reviewData.bookId = _id;
        reviewData.email = user?.email;
        reviewData.name = user?.displayName;
        reviewData.photoURL = user?.photoURL;
        reviewData.createdAt = date;

        // console.log(reviewData);
        // send reviewData to the database

        fetch(`${import.meta.env.VITE_API_URL}/addReview`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviewData),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log('after adding to db : ',data);
                if (data.insertedId) {
                    setReviews((oldReviews) => [reviewData, ...oldReviews]);
                    !Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Review Added to DB successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });

        form.reset();
    };

    const handleEditClick = (e) => {
        if (userEmail !== user?.email) {
            e.preventDefault();
            toast.error("You are not allowed to update this book.");
        }
    };

    return (
        <>
            <Container>
                <div className="grid grid-cols-12 mx-auto my-16 rounded-xl shadow px-2 mb-20 py-20">
                    {/* left side of book details */}
                    <div className="col-span-3 h-fit sticky top-24 z-20">
                        {/* book cover photo */}
                        <div>
                            <img
                                className="rounded-tr-2xl rounded-br-2xl shadow-2xl w-4/5"
                                src={coverPhoto}
                                alt={`image of ${bookTitle}`}
                            />
                        </div>

                        {/* reading status */}
                        <div className="my-4 flex">
                            <button className="btn bg-primary text-white rounded-l-full">
                                {readingStatus}
                            </button>
                            <button className="btn bg-accent text-white rounded-r-full">
                                <MdKeyboardArrowDown
                                    size={30}
                                ></MdKeyboardArrowDown>
                            </button>
                        </div>

                        {/* update delete */}
                        <div className="gap-2 flex items-center">
                            <Link
                                to={`/updateBook/${_id}`}
                                className="bg-white p-1 shadow hover:bg-secondary rounded"
                                onClick={handleEditClick}
                            >
                                <FaEdit className="text-2xl text-accent"></FaEdit>
                            </Link>
                            <button
                                onClick={() => handleDeleteBook(_id)}
                                className="px-2 py-1 bg-white shadow cursor-pointer hover:bg-secondary rounded"
                            >
                                <MdDelete className="text-2xl text-accent"></MdDelete>
                            </button>
                        </div>
                    </div>

                    {/* content */}
                    <div className="col-span-5">
                        {/* book title */}
                        <h2 className="text-2xl md:text-4xl font-semibold ">
                            {bookTitle}
                        </h2>

                        {/* book author */}
                        <p className="text-xl text-gray-500 my-3">
                            {bookAuthor}
                        </p>

                        {/* upvotes and reviews*/}
                        <div className="flex gap-4 items-center">
                            <div className="flex items-center bg-secondary rounded">
                                <button
                                    onClick={handleUpvote}
                                    className="p-1 rounded hover:bg-green-200 hover:text-blue-500 flex justify-center items-center gap-1"
                                >
                                    <BiUpvote className="text-xl text-accent"></BiUpvote>
                                    <span className="font-semibold">{upvoteCount}</span>
                                </button>
                            </div>
                        </div>

                        {/* book category */}
                        <div>
                            <p className="outline outline-accent w-fit px-4 rounded-full mt-4 text-primary font-medium">
                                {bookCategory}
                            </p>
                        </div>

                        <div className="flex gap-4 my-4 font-medium">
                            {/* pages */}
                            <p className="text-gray-600 text-base">
                                {totalPage} pages
                            </p>

                            {/* publishing year */}
                            <p className="text-gray-600 text-base">
                                Published {publishingYear}
                            </p>
                        </div>

                        {/* book overview */}
                        <p className="text-justify font-semibold">
                            {bookOverview}
                        </p>

                        {/* added by */}
                        <div className="my-4">
                            <h5 className="font-medium">Added By</h5>
                            <p>Name : {userName}</p>

                            <p>Email : {userEmail}</p>
                        </div>
                        <div className="border-b-3 border-gray-300"></div>

                        <h1 className="text-4xl font-semibold my-5">Reviews</h1>

                        <div className="flex flex-col justify-center items-center">
                            <h5 className="text-xl font-medium mt-4">
                                Write a Review below
                            </h5>
                        </div>

                        <div>
                            <form onSubmit={handleAddReview}>
                                <fieldset className="fieldset">
                                    <label className="fieldset-legend text-sm">
                                        What do you think
                                    </label>
                                    <textarea
                                        className="textarea h-24 w-full"
                                        placeholder="write a short review"
                                        name="review"
                                    ></textarea>
                                </fieldset>

                                <input
                                    className="btn mt-2"
                                    type="submit"
                                    value="Post"
                                />
                            </form>

                            <div className="border-b-3 border-gray-300 my-10"></div>

                            {/* showing reviews */}
                            <div>
                                {loading ? (
                                    <LoaderSpinner></LoaderSpinner>
                                ) : (
                                    reviews.length > 0 &&
                                    reviews.map((singleReview) => (
                                        <Review
                                            allReviews={reviews}
                                            setReviews={setReviews}
                                            key={singleReview._id}
                                            singleReview={singleReview}
                                            book={bookData}
                                        ></Review>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default BookDetails;
