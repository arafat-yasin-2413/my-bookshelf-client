import React, { use, useEffect } from "react";
import { useLoaderData, useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "Profile";
    }, [location.pathname]);

    const { user } = use(AuthContext);
    console.log(user);

    const { photoURL, displayName, email } = user || {};

    return (
        <div className="my-10 w-fit mx-auto">
            {/* profile page
            <div className="bg-gray-100 w-fit rounded-full p-2">
                <img
                    referrerPolicy="no-referrer"
                    className="w-24"
                    src={photoURL}
                    alt="user profile image"
                />
            </div> */}
            <div
                className="max-w-xl rounded-md border border-gray-300 p-4 shadow-sm sm:p-6 "
            >
                <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                    <div className="sm:order-last sm:shrink-0 bg-gray-100 w-fit h-fit rounded-full p-1">
                        <img
                            alt="user profile image"
                            src={photoURL}
                            className="rounded-full object-cover sm:size-[84px]"
                        />
                    </div>

                    <div className="mt-4 sm:mt-0">
                        <h3 className="text-lg font-medium text-pretty text-gray-900">
                            {displayName}
                        </h3>

                        <p className="mt-1 text-sm text-gray-700">
                            {email}
                        </p>

                        <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. At velit illum provident a, ipsa maiores
                            deleniti consectetur nobis et eaque.
                        </p>
                    </div>
                </div>

                <dl className="mt-6 flex gap-4 lg:gap-6">
                    <div>
                        <dt className="text-sm font-medium text-gray-700">
                            Published on
                        </dt>

                        <dd className="text-xs text-gray-700">31/06/2025</dd>
                    </div>

                    <div>
                        <dt className="text-sm font-medium text-gray-700">
                            Reading time
                        </dt>

                        <dd className="text-xs text-gray-700">12 minutes</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default Profile;
