import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const MyBooks = () => {

    const location = useLocation();
    useEffect(()=>{
        document.title = "MyBooks";
    },[location.pathname])

    return (
        <div>
            my books page
        </div>
    );
};

export default MyBooks;