import React, { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import LoaderSpinner from "./LoaderSpinner";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const { loading, setLoading } = use(AuthContext);

    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_API_URL}/categories`)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
                setLoading(false);
                // console.log(data);
            })
            .catch((error) => {
                toast.error("Failed to fetch categories : ", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="my-10">
            <h2>Showing All categories <span className="font-bold">({categories.length ? categories.length : 0}) </span></h2>
            <div className="flex gap-3">
                {loading ? (
                    <LoaderSpinner></LoaderSpinner>
                ) : (
                    categories.length > 0 &&
                    categories.map((category, idx) => (
                        <button className="btn bg-blue-200 hover:bg-black hover:text-white text-xl px-16 py-10 rounded-2xl" key={idx}>
                            {category}
                        </button>
                    ))
                )}
            </div>
        </div>
    );
};

export default Categories;
