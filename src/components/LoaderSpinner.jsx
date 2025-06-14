import React from 'react';

const LoaderSpinner = () => {
    return (    
        <div className='h-screen flex items-center justify-center'>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default LoaderSpinner;   