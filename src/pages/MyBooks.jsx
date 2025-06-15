import React, { useEffect } from 'react';
import { useLoaderData, useLocation } from 'react-router';
import BookCard from '../components/BookCard';
import MyBookCard from '../components/MyBookCard';

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



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    myAllBooks.length > 0 && 
                    myAllBooks.map(book=> (
                        <MyBookCard key={book._id} book={book}></MyBookCard>
                    ))
                }

            </div>
        </div>
    );
};

export default MyBooks;