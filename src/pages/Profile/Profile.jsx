import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { SiBookstack } from "react-icons/si";
import { motion } from "framer-motion";
import BookPieChart from "../../components/BookPieChart/BookPieChart";
import Container from "../../container/Container";
import FeatureCard from "../../reUsableComponents/FeatureCard/FeatureCard";
import { LuBookOpenCheck } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { PiBookFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

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
    // console.log(user);

    // console.log(totalBookCount);
    // console.log(categoryCount);

    return (
        <>
            <Container>
                <section className="pt-12">
                    {/* profile div */}
                    <div className="bg-white rounded-xl flex items-center gap-8 px-4 py-8">
                        {/* image div */}
                        <div>
                            <img
                                className="w-24 outline-4 outline-accent rounded-full"
                                src={photoURL}
                                alt="image of user"
                            />
                        </div>

                        {/* content div */}
                        <div>
                            <h3 className="text-xl">{displayName}</h3>
                            <h4 className="text-base text-gray-500">{email}</h4>
                        </div>
                    </div>

                    {/* feature divs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-8">
                        <FeatureCard
                            icon={LiaSwatchbookSolid}
                            text={"Total Books"}
                            value={totalBookCount}
                        ></FeatureCard>
                        <FeatureCard
                            icon={LuBookOpenCheck}
                            text={"Reading Hours"}
                            value={14}
                        ></FeatureCard>
                        <FeatureCard
                            icon={FaStar}
                            text={"Total Review"}
                            value={7}
                        ></FeatureCard>
                        <FeatureCard
                            icon={FaHeart}
                            text={"Wishlist"}
                            value={10}
                        ></FeatureCard>
                        <FeatureCard
                            icon={PiBookFill}
                            text={"Unread"}
                            value={4}
                        ></FeatureCard>
                    </div>

                    {/* pie chart div */}
                    <div>
                        <BookPieChart
                            categoryCount={categoryCount}
                        ></BookPieChart>
                    </div>
                </section>
            </Container>
        </>
    );
};

export default Profile;
