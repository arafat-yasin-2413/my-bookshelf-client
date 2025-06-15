import React, { useEffect } from 'react';
import { useLoaderData, useLocation } from 'react-router';

const MyBooks = () => {

    const location = useLocation();
    useEffect(()=>{
        document.title = "MyBooks";
    },[location.pathname])

    const myAllBooks = useLoaderData();
    console.log(myAllBooks);

    
    return (
        <div>
            my books page
        </div>
    );
};

export default MyBooks;