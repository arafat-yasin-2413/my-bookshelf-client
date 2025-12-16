import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import BookCard from "../../components/BookCard/BookCard";
import LoaderSpinner from "../../components/LoadingSpinner/LoaderSpinner";
import Container from "../../container/Container";

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
            // console.error("Failed to fetch all books", err);
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
            // console.error("Search failed", err);
        } finally {
            setLoading(false);
        }
    };

    const handleClearSearch = () => {
        setSearchQuery("");
        fetchAllBooks();
    };

    return (
        <Container>
            <div className="my-10">
                <h2 className="text-4xl text-primary font-medium my-6">Bookshelf</h2>

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
                        className="px-4 py-2 bg-accent cursor-pointer text-white rounded hover:bg-primary"
                    >
                        Search
                    </button>
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={handleClearSearch}
                            className="px-4 py-2 bg-gray-500
                             cursor-pointer text-white rounded hover:bg-gray-600"
                        >
                            Clear
                        </button>
                    )}
                </form>

                {loading ? (
                    <LoaderSpinner />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
        </Container>
    );
};

export default Bookshelf;
