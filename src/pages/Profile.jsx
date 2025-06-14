import React, { useEffect } from 'react';
import { useLoaderData, useLocation } from 'react-router';

const Profile = () => {

    const location = useLocation();
    useEffect(()=>{
        document.title = "Profile";
    },[location.pathname])

    const profileData = useLoaderData();
    console.log(profileData);
    return (
        <div>
            profile page
        </div>
    );
};

export default Profile;