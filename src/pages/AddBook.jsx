import React from "react";
import Swal from "sweetalert2";

const AddBook = () => {
    const handleAddBook = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const bookData = Object.fromEntries(formData.entries());
        
        bookData.upvotedBy = [];

        console.log(bookData);
        // send data to the database

        fetch(`${import.meta.env.VITE_API_URL}/addBook`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bookData),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log('after adding to db : ',data);
                if (data.insertedId) {
                    !Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Book Added to DB",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });

        form.reset();
    };
    return (
        <div className="bg-blue-300 rounded">
            <h2>Add book page</h2>

            <form onSubmit={handleAddBook}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-6">
                    {/* book title */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="fieldset-legend text-sm">
                            Book Title
                        </label>

                        <input
                            type="text"
                            name="bookTitle"
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
                            className="input w-full"
                            placeholder="author name"
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
                        ></textarea>
                    </fieldset>
                </div>

                <div className="p-6">
                    <input
                        type="submit"
                        className="btn w-full text-xl "
                        value="Add Book"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddBook;
