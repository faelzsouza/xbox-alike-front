import React from "react";
import { Link } from "react-router-dom";
import ProfilesList from "./components/ProfilesList/ProfilesList";

const Profiles = () => {
    const userId = localStorage.getItem('userId');
    return (
        <div>
            <ProfilesList userId={userId} />
            <Link to="/profile/create">Create a New Profile</Link>
        </div>
    );
};

export default Profiles;