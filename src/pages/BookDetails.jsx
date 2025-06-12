import React from 'react';
import { useLoaderData } from 'react-router';

const BookDetails = () => {
    const bookData = useLoaderData();
    // TODO: user email, name niye ashte hobe
    const {_id, bookTitle, coverPhoto, bookAuthor, totalPage, bookCategory, readingStatus, bookOverview, publishingYear } = bookData || {};
    return (
        <div>
            

            <div>
                <img src={coverPhoto} alt={`image of ${bookTitle}`} />
            </div>

            <div>
                <p>{bookTitle}</p>
                <p>Author: {bookAuthor}</p>
                <p>Total Page : {totalPage}</p>
                <p>Publishing year : {publishingYear}</p>
                <p>Category : {bookCategory}</p>
                <p>Reading status : {readingStatus}</p>
                <p>Book overview : {bookOverview}</p>
            </div>

        </div>
    );
};

export default BookDetails;