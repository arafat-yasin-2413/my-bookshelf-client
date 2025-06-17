import React from "react";

const FAQ = () => {
    return (

        <div className="space-y-4 my-10 max-w-xl h-fit">

            <h2 className="text-4xl font-semibold">Frequently Asked Questions</h2>

            {/* 1 */}
            <details
                className="group [&_summary::-webkit-details-marker]:hidden"
                open
            >
                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-100 p-4 text-gray-900">
                    <h2 className="text-lg font-medium">
                        How can I add a new book?
                    </h2>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="block size-5 shrink-0 group-open:hidden"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden size-5 shrink-0 group-open:block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900">
                    After logging in, go to the "Add Book" page and fill in the required information like title, author, category, etc. to add a new book to your collection.
                </p>
            </details>

            {/* 2 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-100 p-4 text-gray-900">
                    <h2 className="text-lg font-medium">
                        How do I track my reading status?
                    </h2>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="block size-5 shrink-0 group-open:hidden"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden size-5 shrink-0 group-open:block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900">
                    Each book has a reading status such as Want to Read, Reading, or Read. You can update the status directly from your Bookshelf page.
                </p>
            </details>

            {/* 3 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-100 p-4 text-gray-900">
                    <h2 className="text-lg font-medium">
                        How can I filter books by category?
                    </h2>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="block size-5 shrink-0 group-open:hidden"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden size-5 shrink-0 group-open:block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900">
                    Visit the Categories section on the homepage or navbar and select your desired category to view all books under that category.
                </p>
            </details>

            {/* 4 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-100 p-4 text-gray-900">
                    <h2 className="text-lg font-medium">
                        Can I edit book information?
                    </h2>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="block size-5 shrink-0 group-open:hidden"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden size-5 shrink-0 group-open:block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900">
                    Yes, you can edit only the books that you have added. Click the "Update" button on the book card in your My Books section to make changes.
                </p>
            </details>

            {/* 5 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-100 p-4 text-gray-900">
                    <h2 className="text-lg font-medium">
                        Where can I see detailed information about a book?
                    </h2>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="block size-5 shrink-0 group-open:hidden"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden size-5 shrink-0 group-open:block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900">
                    Click the "View Details" button on any book card to view more information like author, category, publisher, and description.
                </p>
            </details>

            {/* 6 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-100 p-4 text-gray-900">
                    <h2 className="text-lg font-medium">
                        How do I create an account or log in?
                    </h2>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="block size-5 shrink-0 group-open:hidden"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden size-5 shrink-0 group-open:block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900">
                    You can register or log in using your email and password from the Register or Login page in the navigation bar.
                </p>
            </details>

            {/* 7 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-100 p-4 text-gray-900">
                    <h2 className="text-lg font-medium">
                        How do I delete a book I added?
                    </h2>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="block size-5 shrink-0 group-open:hidden"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden size-5 shrink-0 group-open:block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </summary>

                <p className="px-4 pt-4  text-gray-900">
                    Navigate to the My Books section. There you can delete any book you’ve added by clicking the "Delete" button.
                </p>
            </details>




        </div>
    );
};

export default FAQ;
