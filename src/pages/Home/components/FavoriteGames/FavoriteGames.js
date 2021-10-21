import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Api } from "../../../../api/api";
import GameCard from "../GameCard/GameCard";
import "./FavoriteGames.scss";

const FavoriteGames = () => {
    const [profile, setProfile] = useState(undefined);
    const profileId = localStorage.getItem("profileId");

    useEffect(async () => {
        const response = await Api.getById("profiles", profileId, true);
        const resProfile = await response.json();
        setProfile(resProfile);
    }, []);

    if (profile) {
        if (profile.favGames.length == 0) {
            return (
                <div>
                    There's no favorite games yet! Go to home page and click on
                    heart button of your favorite games.
                </div>
            );
        } else if (profile.favGames.length > 0) {
            return (
                <div className="favorite-games">
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{ marginTop: "1rem" }}
                    >
                        Favorite Games
                    </Typography>
                    <GameCard games={profile.favGames} _selected={true} />
                </div>
            );
        }
    }

    return <div></div>;
};

export default FavoriteGames;
