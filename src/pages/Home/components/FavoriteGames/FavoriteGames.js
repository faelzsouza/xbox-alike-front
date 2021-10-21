import React, { useEffect } from "react";
import { useState } from "react";
import { Api } from "../../../../api/api";
import GameCard from "../GameCard/GameCard";

const FavoriteGames = () => {
    const [profile, setProfile] = useState(undefined);
    const profileId = localStorage.getItem("profileId");

    useEffect(async () => {
        const response = await Api.getById("profiles", profileId, true);
        const resProfile = await response.json();
        setProfile(resProfile);
    }, []);

    if (profile) {
        return <GameCard games={profile.favGames} _selected={true} />;
    }

    return <div></div>;
};

export default FavoriteGames;
