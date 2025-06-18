import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import BookCard from "../components/BookCard";
import LoaderSpinner from "../components/LoaderSpinner";

const Bookshelf = () => {
    const location = useLocation();
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = "Bookshelf";
        fetchAllBooks();
    }, [location.pathname]);

    const fetchAllBooks = async () => {
        try {
            setLoading(true);
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/bookshelf`
            );
            const data = await res.json();
            setBooks(data);
        } catch (err) {
            console.error("Failed to fetch all books", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        try {
            setLoading(true);
            const res = await fetch(
                `${
                    import.meta.env.VITE_API_URL
                }/books/search?query=${searchQuery}`
            );
            const data = await res.json();
            setBooks(data);
        } catch (err) {
            console.error("Search failed", err);
        } finally {
            setLoading(false);
        }
    };

    const handleClearSearch = () => {
        setSearchQuery("");
        fetchAllBooks(); 
    };

    return (
        <div className="bg-gray-200 p-4 rounded my-10">
            <h2 className="text-4xl font-medium my-6">Bookshelf</h2>

            <form
                onSubmit={handleSearch}
                className="mb-6 flex items-center gap-2"
            >
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-2 rounded border border-gray-400 w-60"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-blue-700"
                >
                    Search
                </button>
                {searchQuery && (
                    <button
                        type="button"
                        onClick={handleClearSearch}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Clear
                    </button>
                )}
            </form>

            {loading ? (
                <LoaderSpinner />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {books.length > 0 ? (
                        books.map((book) => (
                            <BookCard book={book} key={book._id} />
                        ))
                    ) : (
                        <p>No books found</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Bookshelf;
