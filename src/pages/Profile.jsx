import React from 'react';
import { useLoaderData } from 'react-router';

const Profile = () => {
    const profileData = useLoaderData();
    console.log(profileData);
    return (
        <div>
            profile page
        </div>
    );
};

export default Profile;