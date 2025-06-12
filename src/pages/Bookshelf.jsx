import React from 'react';
import { useLoaderData } from 'react-router';
import BookCard from '../components/BookCard';

const Bookshelf = () => {
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