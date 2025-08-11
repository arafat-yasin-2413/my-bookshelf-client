import React, { Suspense, use, useEffect } from "react";
import { useLoaderData, useLocation } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import MyBooksList from "../MyBooksList/MyBooksList";
import { myBooksPromise } from "../../api/myBooksApi";
import LoaderSpinner from "../../components/LoadingSpinner/LoaderSpinner";
import Container from "../../container/Container";

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
            <Container>
                <div className="my-10">
                    <h2 className="mb-10 text-center text-4xl text-primary font-semibold">
                        My Books
                    </h2>
                    {user?.email ? (
                        <Suspense fallback={<LoaderSpinner></LoaderSpinner>}>
                            <MyBooksList
                                myBooksPromise={myBooksPromise(
                                    user.email,
                                    user.accessToken
                                )}
                            ></MyBooksList>
                        </Suspense>
                    ) : (
                        <LoaderSpinner></LoaderSpinner>
                    )}
                </div>
            </Container>
        </>
    );
};

export default MyBooks;
