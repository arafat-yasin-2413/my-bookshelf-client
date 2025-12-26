import React, { use, useEffect, useState } from "react";
import { BiUpvote } from "react-icons/bi";
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
    const navigate = useNavigate();
    const bookData = useLoaderData();

    const { user, loading, setLoading } = use(AuthContext);

    const [showOptions, setShowOptions] = useState(false);
    const [upvoteCount, setUpvoteCount] = useState(bookData?.upvotedBy?.length || 0);
    const [reviews, setReviews] = useState([]);
    const [date, setDate] = useState("");

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
        userEmail,
        userName,
    } = bookData || {};

    useEffect(() => {
        document.title = "Book Details";
        window.scrollTo({ top: 0 });
        setDate(getCurrentDateFormatted());
    }, [location.pathname]);

    // fetch reviews
    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_API_URL}/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [_id, setLoading]);

    const handleUpvote = () => {
        if (!user) return toast.error("Login required");
        if (user.email === userEmail) return toast.error("Cannot upvote your own book");

        axios
            .patch(`${import.meta.env.VITE_API_URL}/upvote/${_id}`, { email: user.email })
            .then(res => {
                if (res.data.modifiedCount) {
                    setUpvoteCount(prev => prev + 1);
                    toast.success("Upvoted successfully");
                }
            });
    };

    const handleDeleteBook = () => {
        if (userEmail !== user?.email) return toast.error("Not allowed");

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/book/${_id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) navigate("/bookshelf");
                    });
            }
        });
    };

    const handleAddReview = e => {
        e.preventDefault();
        const form = e.target;

        if (reviews.some(r => r.email === user?.email)) {
            return toast.error("Already reviewed");
        }

        const review = {
            review: form.review.value,
            bookId: _id,
            email: user?.email,
            name: user?.displayName,
            photoURL: user?.photoURL,
            createdAt: date,
        };

        fetch(`${import.meta.env.VITE_API_URL}/addReview`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setReviews(prev => [review, ...prev]);
                    form.reset();
                }
            });
    };

    return (
        <Container>
            <div
                className="flex flex-col lg:flex-row gap-8 shadow rounded-2xl px-4 sm:px-6 py-6 sm:py-10 my-10"
            >
                {/* LEFT */}
                <div
                    className="flex flex-col items-center lg:items-start lg:sticky lg:top-24 h-fit gap-4"
                >
                    <img
                        src={coverPhoto}
                        alt={bookTitle}
                        className="w-48 sm:w-56 md:w-64 rounded-2xl shadow-2xl"
                    />

                    <div className="flex">
                        <button className="btn bg-primary text-white rounded-l-full px-6">
                            {readingStatus}
                        </button>
                        <button
                            onClick={() => setShowOptions(!showOptions)}
                            className="btn bg-accent text-white rounded-r-full"
                        >
                            <MdKeyboardArrowDown size={28} />
                        </button>
                    </div>

                    {showOptions && (
                        <div className="bg-white shadow-lg rounded-lg w-full">
                            <button className="w-full px-4 py-2 hover:bg-gray-100">
                                Add to Wishlist
                            </button>
                        </div>
                    )}

                    <div className="flex gap-3">
                        <Link to={`/updateBook/${_id}`} className="p-2 bg-white shadow rounded-lg">
                            <FaEdit className="text-xl text-accent" />
                        </Link>
                        <button
                            onClick={handleDeleteBook}
                            className="p-2 bg-white shadow rounded-lg"
                        >
                            <MdDelete className="text-xl text-accent" />
                        </button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                        {bookTitle}
                    </h2>
                    <p className="text-gray-500 mt-2 font-semibold">{bookAuthor}</p>

                    <div className="flex items-center gap-4">
                        <button
                        onClick={handleUpvote}
                        className="flex items-center gap-2 mt-4 px-3 py-1 bg-accent/20 rounded-xl"
                    >
                        <BiUpvote className="text-xl text-accent" />
                        <span className="font-semibold">{upvoteCount}</span>
                    </button>

                    <p className="inline-block mt-4 px-4 py-1 rounded-xl font-semibold text-accent bg-white">
                        {bookCategory}
                    </p>
                    </div>

                    <div className="flex gap-6 mt-4 text-gray-600">
                        <p className="bg-white px-2 py-1 rounded-xl"><span className="font-semibold">{totalPage}</span> pages</p>
                        <p className="bg-white px-2 py-1 rounded-xl">Published {publishingYear}</p>
                    </div>

                    <p className="mt-6 leading-relaxed max-w-3xl">
                        {bookOverview}
                    </p>

                    <div className="mt-6">
                        <h5 className="font-semibold">Added By</h5>
                        <p>{userName}</p>
                        <p>{userEmail}</p>
                    </div>

                    <div className="border-b my-8" />

                    <h3 className="text-3xl font-semibold mb-4">Reviews</h3>

                    <form onSubmit={handleAddReview} className="max-w-xl">
                        <textarea
                            name="review"
                            className="textarea w-full h-24"
                            placeholder="Write a review"
                        />
                        <button className="btn mt-3">Post</button>
                    </form>

                    <div className="border-b my-8" />

                    {loading ? (
                        <LoaderSpinner />
                    ) : (
                        reviews.map(review => (
                            <Review key={review._id} singleReview={review} />
                        ))
                    )}
                </div>
            </div>
        </Container>
    );
};

export default BookDetails;
