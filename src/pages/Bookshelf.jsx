import React, { useEffect } from 'react';
import { useLoaderData, useLocation } from 'react-router';
import BookCard from '../components/BookCard';
import LoaderSpinner from '../components/LoaderSpinner';

const Bookshelf = () => {

    const location = useLocation();
    useEffect(()=>{
        document.title = "Bookshelf";
    },[location.pathname])

    const allBook = useLoaderData();
    console.log(allBook);
    return (
        <div>
            <h2>bookshelf page</h2>

            

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    allBook.map((book)=>(
                        <BookCard book={book} key={book._id}></BookCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Bookshelf;