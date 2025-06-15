import React, { use, useEffect } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const UpdateBook = () => {

    const location = useLocation();
    useEffect(()=>{
        document.title = "Update Book";
    },[location.pathname])

    const book = useLoaderData();
    const navigate = useNavigate();
    const {user} = use(AuthContext);
    console.log(book);

    const {
        _id,
        bookTitle,
        coverPhoto,
        bookAuthor,
        totalPage,
        bookOverview,
        publishingYear,
    } = book || {};

    const handleUpdateBook = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const updatedBookData = Object.fromEntries(formData.entries());
        console.log(updatedBookData);

        // send data to the database
        fetch(`${import.meta.env.VITE_API_URL}/book/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedBookData),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.modifiedCount) {
                    !Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Book data updated successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate("/bookshelf");
                }

            });

        
    };
    return (
        <div className="bg-blue-300 rounded">
            <h2>Update book page</h2>

            <form onSubmit={handleUpdateBook}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-6">
                    {/* book title */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="fieldset-legend text-sm">
                            Book Title
                        </label>

                        <input
                            type="text"
                            name="bookTitle"
                            defaultValue={bookTitle}
                            className="input w-full"
                            placeholder="provide a title of the book"
                        />
                    </fieldset>

                    {/* cover photo */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="fieldset-legend text-sm">
                            Cover Photo
                        </label>

                        <input
                            type="text"
                            name="coverPhoto"
                            defaultValue={coverPhoto}
                            className="input w-full"
                            placeholder="book cover photo"
                        />
                    </fieldset>

                    {/* total page */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="fieldset-legend text-sm">
                            Total Page
                        </label>

                        <input
                            type="number"
                            name="totalPage"
                            defaultValue={totalPage}
                            className="input w-full"
                            placeholder="total page"
                        />
                    </fieldset>

                    {/* book author */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="fieldset-legend text-sm">
                            Book Author
                        </label>

                        <input
                            type="text"
                            name="bookAuthor"
                            defaultValue={bookAuthor}
                            className="input w-full"
                            placeholder="author name"
                        />
                    </fieldset>

                    {/* user email read only */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="fieldset-legend text-sm">
                            User Email
                        </label>

                        <input
                            type="email"
                            name="userEmail"
                            className="input w-full"
                            value={user?.email}
                            readOnly
                        />
                    </fieldset>

                    {/* user name read only */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="fieldset-legend text-sm">
                            User Name
                        </label>

                        <input
                            type="text"
                            name="userName"
                            className="input w-full"
                            value={user?.displayName}
                            readOnly
                        />
                    </fieldset>





                    {/* publishing year */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="fieldset-legend text-sm">
                            Publishing Year
                        </label>

                        <input
                            type="number"
                            name="publishingYear"
                            defaultValue={publishingYear}
                            className="input w-full"
                            placeholder="year of publication"
                        />
                    </fieldset>

                    {/* book category */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="fieldset-legend text-sm">
                            Book Category
                        </label>

                        <select
                            defaultValue="Pick a browser"
                            className="select w-full"
                            name="bookCategory"
                        >
                            <option disabled={true}>Pick a Category</option>
                            <option>Fiction</option>
                            <option>Non-Fiction</option>
                            <option>Fantasy</option>
                            <option>Science</option>
                            <option>Psychology</option>
                            <option>Crime</option>
                        </select>
                    </fieldset>

                    {/* reading status */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="fieldset-legend text-sm">
                            Reading Status
                        </label>
                        <select
                            defaultValue="Pick a browser"
                            className="select w-full"
                            name="readingStatus"
                        >
                            <option disabled={true}>
                                Select a reading status
                            </option>
                            <option>Read</option>
                            <option>Reading</option>
                            <option>Want to Read</option>
                        </select>
                    </fieldset>

                    {/* book overview */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="fieldset-legend text-sm">
                            Book Overview
                        </label>
                        <textarea
                            className="textarea h-24 w-full"
                            placeholder="write a short overview"
                            name="bookOverview"
                            defaultValue={bookOverview}
                        ></textarea>
                    </fieldset>
                </div>

                <div className="p-6">
                    <input
                        type="submit"
                        className="btn w-full text-xl "
                        value="Update Book"
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdateBook;
