import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import BookPieChart from "../components/BookPieChart";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { SiBookstack } from "react-icons/si";
import { motion } from "framer-motion";

const Profile = () => {
    const location = useLocation();
    const [totalBookCount, setTotalBookCount] = useState(0);
    const [categoryCount, setCategoryCount] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        document.title = "Profile";
    }, [location.pathname]);

    useEffect(() => {
        const fetchCounts = async () => {
            if (!user?.email) return;

            try {
                const totalCountRes = await axios.get(
                    `${import.meta.env.VITE_API_URL}/books/count?email=${
                        user.email
                    }`
                );
                const categoryCountRes = await axios.get(
                    `${
                        import.meta.env.VITE_API_URL
                    }/books/category-count?email=${user.email}`
                );

                setTotalBookCount(totalCountRes.data.count);
                setCategoryCount(categoryCountRes.data);
            } catch (error) {
                console.error("Failed to fetch book counts", error);
            }
        };

        fetchCounts();
    }, [user?.email]);

    if (!user) {
        return <p className="text-center mt-10">Loading profile...</p>;
    }

    const { photoURL, displayName, email } = user;

    console.log(totalBookCount);
    console.log(categoryCount);

    return (
        <>
            <motion.div
                className="my-10 w-fit mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="w-sm md:w-xl rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
                    <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                        <div className="sm:order-last sm:shrink-0 bg-gray-100 w-fit h-fit rounded-full p-1">
                            <img
                                alt="user profile"
                                src={photoURL}
                                className="rounded-full object-cover sm:size-[84px]"
                            />
                        </div>

                        <div className="mt-6 sm:mt-0 bg-white shadow-md rounded-xl p-6 border border-gray-200 max-w-md">
                            {/* Name */}
                            <h3 className="text-4xl font-semibold text-gray-800">
                                {displayName}
                            </h3>

                            {/* Email */}
                            <p className="mt-1 text-sm text-gray-500">
                                {email}
                            </p>

                            {/* Total Books */}
                            <div className="mt-4 text-base text-gray-700 font-medium">
                                <p className="flex items-center">
                                    <span>
                                        <LiaSwatchbookSolid
                                            size={24}
                                            color="teal"
                                        ></LiaSwatchbookSolid>
                                    </span>
                                    Total Books: {totalBookCount}
                                </p>
                            </div>

                            {/* Category Title */}
                            <p className="mt-3 text-base text-gray-700 font-medium flex items-center gap-1">
                                <span>
                                    <SiBookstack
                                        size={24}
                                        color="teal"
                                    ></SiBookstack>
                                </span>{" "}
                                Books per Category:
                            </p>

                            {/* Category List */}
                            {Array.isArray(categoryCount) &&
                            categoryCount.length > 0 ? (
                                <ul className="mt-1 text-sm text-gray-600 list-disc list-inside space-y-1">
                                    {categoryCount.map((item, index) => (
                                        <li key={index}>
                                            <span className="font-medium text-gray-700">
                                                {item.category}
                                            </span>
                                            :{" "}
                                            <span className="text-base font-medium">
                                                {item.count}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-4xl text-center text-gray-400 mt-1">
                                    No category data found.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            <BookPieChart categoryCount={categoryCount}></BookPieChart>
        </>
    );
};

export default Profile;
