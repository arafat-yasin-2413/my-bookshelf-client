import React, { Suspense, use, useEffect } from "react";
import { useLoaderData, useLocation } from "react-router";
import BookCard from "../components/BookCard";
import MyBookCard from "../components/MyBookCard";
import { AuthContext } from "../contexts/AuthContext";
import LoaderSpinner from "../components/LoaderSpinner";
import MyBooksList from "./MyBooksList";
import { myBooksPromise } from "../api/myBooksApi";

const MyBooks = () => {
    const location = useLocation();
    const { user } = use(AuthContext);

    useEffect(() => {
        document.title = "MyBooks";
    }, [location.pathname]);


    // console.log("user in mybooks : ", user);
    // console.log('token from the context : ', user.accessToken);

    return (
        <>
            





            <div className="my-10">

                {/* <Suspense fallback={<LoaderSpinner></LoaderSpinner>}>
                    <MyBooksList>
                        myBooksPromise = {myBooksPromise(user?.email)}
                    </MyBooksList>
                </Suspense> */}

                    <h2 className="mb-10 text-center text-4xl font-semibold">My Books</h2>
                {
                    user?.email ? (
                        <Suspense fallback={<LoaderSpinner></LoaderSpinner>}>
                            <MyBooksList myBooksPromise={myBooksPromise(user.email, user.accessToken)}>

                            </MyBooksList>
                        </Suspense>
                    ) : (<LoaderSpinner></LoaderSpinner>)
                }
            </div>
        </>
    );
};

export default MyBooks;
