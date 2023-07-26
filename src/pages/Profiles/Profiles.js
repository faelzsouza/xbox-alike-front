import React from "react";
import { Link } from "react-router-dom";
import ProfilesList from "./components/ProfilesList/ProfilesList";
import "./Profiles.scss";

const Profiles = () => {
    const userId = localStorage.getItem("userId");
    return (
        <div>
            <ProfilesList userId={userId} />
            <div className="new-profile">
                <Link to="/profile/create">New Profile</Link>
            </div>
        </div>
    );
};

export default Profiles;
