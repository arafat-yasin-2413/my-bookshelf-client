import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import BookCard from './BookCard';

const Top6Books = () => {
    
    const initialTopBooks = useLoaderData();
	const [topBooks, setTopBooks] = useState(initialTopBooks);

    return (
        <div className='bg-gray-100 p-6 rounded-2xl'>

            <h2 className='text-4xl my-10 font-semibold'>Top Books</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    topBooks.length> 0 && 
                    topBooks.map(book => (
                        <BookCard key={book._id} book={book}></BookCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Top6Books;