import React, { useContext, useEffect } from 'react';
import useAxios from '../../hooks/useAxios';
import { useLocation, useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../contexts/AuthContext';
import LoaderSpinner from '../../components/LoadingSpinner/LoaderSpinner';
import Container from '../../container/Container';
import { motion } from 'framer-motion';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';

const MyWishlist = () => {

    const axiosSecure = useAxios();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const location = useLocation();

    useEffect(() => {
        document.title = "MyWishlist";
    }, [location.pathname]);

    const { data: wishlist = [], isLoading, isError, refetch } = useQuery({
        queryKey: ["myWishlist", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get("/myWishlist", {
                params: { userEmail: user?.email },
            });
            return res.data;
        },
        enabled: !!user?.email,
    });

    // console.log(wishlist);

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/myWishlist/${id}`, {
                        method: "DELETE",
                    });

                    const data = await response.json();
                    // console.log(data);

                    if (data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Your item has been removed.", "success");
                        if (typeof refetch === "function")
                            refetch();
                    } else {
                        Swal.fire("Error!", "Book was not deleted.", "error");
                    }
                } catch (error) {
                    Swal.fire("Error!", "Something went wrong!", "error");
                    console.error(error);
                }
            }
        });
    };

    if (isLoading) return <LoaderSpinner></LoaderSpinner>
    if (isError) {
        return (
            <p className="text-center text-red-500 py-10">
                Something went wrong while fetching wishlist
            </p>
        )
    }



    if (wishlist.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <h2 className="text-2xl font-semibold mb-4">
                    Your Wishlist is Empty!
                </h2>
                <p className="mb-6 text-gray-600">
                    You did not add any books in your wishlist.
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="btn btn-primary hover:scale-105 transition"
                >
                    Go to Home
                </button>
            </div>
        );
    }



    return (
        <Container>
            <div className="min-h-screen justify-center items-center">
                <div className="overflow-x-auto p-4">
                    <motion.h2
                        className="text-4xl text-primary my-10 font-semibold"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 3, ease: "easeOut" }}
                    >
                        My Wishlist
                    </motion.h2>
                    <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                        <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                            <tr>
                                <th className="py-3 px-4 text-left text-sm font-semibold">SL</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold">Book Name</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold">Author</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold">Category</th>
                                <th className="py-3 px-4 text-center text-sm font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {wishlist.map((book, index) => (
                                <tr
                                    key={book._id}
                                    className="hover:bg-indigo-50 transition-colors duration-200"
                                >
                                    <td className="py-3 px-4 text-gray-700">{index + 1}</td>
                                    <td className="py-3 px-4 font-medium text-gray-800">{book.bookName}</td>
                                    <td className="py-3 px-4 text-gray-700">{book.bookAuthor}</td>
                                    <td className="py-3 px-4 text-gray-700">{book.bookCategory}</td>
                                    <td className="py-3 px-4 text-center">

                                        <button onClick={() => handleDelete(book._id)} className="px-3 py-1 text-sm rounded-lg shadow-md transition-all duration-200 cursor-pointer">
                                            <MdDelete className="hover:fill-red-500" size={24}></MdDelete>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>
    );
};

export default MyWishlist;