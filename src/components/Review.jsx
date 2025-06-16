import React from 'react';

const Review = ({singleReview}) => {
    console.log(singleReview);
    
    const {review, email, name, photoURL, createdAt} = singleReview || {}
    
    return (
        <div>
            this is review


            <p>
                {review}
            </p>

            <h2>{email}</h2>

            <h2>{name}</h2>

            <h4>{createdAt}</h4>

            <img src={photoURL} alt={`image of ${name}`} />

            
        </div>
    );
};

export default Review;