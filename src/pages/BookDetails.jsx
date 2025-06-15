import React, { use, useEffect, useState } from "react";
import { BiSolidUpvote, BiUpvote } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

const BookDetails = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "Book Details";
    }, [location.pathname]);

    const bookData = useLoaderData();
    const navigate = useNavigate();
    // TODO: user email, name niye ashte hobe
    const {user} = use(AuthContext);
    
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
    } = bookData || {};
    
    const [likeCount , setLikeCount] = useState(upvotedBy.length);
    
    console.log(user?.email);
    console.log(userEmail);
    // console.log('user email : ', user.email);
    // console.log('userEmail from books db : ', userEmail);

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



    const handleLike = () => {
        if(user?.email === userEmail ) {
            return toast.error('Lojja kore na?')
        }
        
        axios.patch(`${import.meta.env.VITE_API_URL}/like/${_id}`,{email: user?.email})
        .then(data=>{
            console.log(data.data);
            if(data.data.modifiedCount) {
                toast.success('You have Liked the book Successfully');
                setLikeCount(prev=> prev + 1)
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <>
            {/* <div className="flex items-center gap-2">
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
                    <BiUpvote></BiUpvote> <span>0</span>
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
            </div> */}

            <div className="grid grid-cols-8 w-5xl mx-auto my-16 ">
                <div className="col-span-3">
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
                        <button className="btn bg-success rounded-l-full">
                            {readingStatus}
                        </button>
                        <button className="btn bg-success rounded-r-full">
                            <MdKeyboardArrowDown
                                size={30}
                            ></MdKeyboardArrowDown>
                        </button>
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
                    
                </div>

                {/* content */}
                <div className="col-span-5">
                    {/* book title */}
                    <h2 className="text-2xl md:text-4xl font-semibold ">
                        {bookTitle}
                    </h2>

                    {/* book author */}
                    <p className="text-xl text-gray-500 my-3">{bookAuthor}</p>

                    {/* upvotes and reviews*/}
                    <div className="flex gap-4 items-center">

                        <div className="flex items-center gap-2">
                            <button onClick={handleLike} className="btn bg-gray-300 rounded hover:bg-green-200 hover:text-blue-500">
                                <BiUpvote size={20}></BiUpvote>
                            </button>

                            <div>
                                <h5 className="text-xl">{likeCount}</h5>
                            </div>
                        </div>

                        {/* reviews */}
                        <p className="text-gray-500">0 reviews</p>
                    </div>

                    {/* book category */}
                    <div>
                        <p className="outline outline-green-500 w-fit px-4 rounded-full mt-4 text-green-700 font-medium">
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
                    <p className="text-justify font-semibold">{bookOverview}</p>

                    {/* added by */}
                    <div className="my-4">
                        <p>
                            Added by : {userEmail}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookDetails;
