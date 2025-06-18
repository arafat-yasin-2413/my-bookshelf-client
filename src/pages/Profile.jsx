import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

const Profile = () => {
    const location = useLocation();
    const [totalBookCount, setTotalBookCount] = useState(0);
    const [categoryCount, setCategoryCount] = useState([]); // ✅ array
    const { user } = useContext(AuthContext);

    useEffect(() => {
        document.title = "Profile";
    }, [location.pathname]);

    useEffect(() => {
        const fetchCounts = async () => {
            if (!user?.email) return;

            try {
                const totalCountRes = await axios.get(
                    `${import.meta.env.VITE_API_URL}/books/count?email=${user.email}`
                );
                const categoryCountRes = await axios.get(
                    `${import.meta.env.VITE_API_URL}/books/category-count?email=${user.email}`
                );

                setTotalBookCount(totalCountRes.data.count);
                setCategoryCount(categoryCountRes.data); // ✅ expecting array
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
        <div className="my-10 w-fit mx-auto">
            <div className="max-w-xl rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
                <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                    <div className="sm:order-last sm:shrink-0 bg-gray-100 w-fit h-fit rounded-full p-1">
                        <img
                            alt="user profile"
                            src={photoURL}
                            className="rounded-full object-cover sm:size-[84px]"
                        />
                    </div>

                    <div className="mt-4 sm:mt-0">
                        <h3 className="text-lg font-medium text-gray-900">{displayName}</h3>
                        <p className="mt-1 text-sm text-gray-700">{email}</p>

                        <p className="mt-4 text-sm text-gray-700 font-semibold">
                            Total Books: {totalBookCount}
                        </p>

                        <p className="mt-2 text-sm text-gray-700 font-medium">
                            Books per Category:
                        </p>

                        {Array.isArray(categoryCount) && categoryCount.length > 0 ? (
                            <ul className="text-sm text-gray-600 list-disc list-inside">
                                {categoryCount.map((item, index) => (
                                    <li key={index}>
                                        {item.category}: {item.count}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm italic text-gray-500">No category data found.</p>
                        )}
                    </div>
                </div>

                {/* <dl className="mt-6 flex gap-4 lg:gap-6">
                    <div>
                        <dt className="text-sm font-medium text-gray-700">Published on</dt>
                        <dd className="text-xs text-gray-700">31/06/2025</dd>
                    </div>

                    <div>
                        <dt className="text-sm font-medium text-gray-700">Reading time</dt>
                        <dd className="text-xs text-gray-700">12 minutes</dd>
                    </div>
                </dl> */}
            </div>
        </div>
    );
};

export default Profile;
