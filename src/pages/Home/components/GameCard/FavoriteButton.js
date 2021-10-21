import { Favorite } from "@mui/icons-material";
import { ToggleButton } from "@mui/material";
import React, { useState } from "react";
import { Api } from "../../../../api/api";

const FavoriteButton = ({ gameId, _selected }) => {
    const [selected, setSelected] = useState(_selected || false);
    const handleFavorite = async () => {
        const profileId = localStorage.getItem('profileId')
        const body = selected
            ? { deleteFavorites: [+profileId] }
            : { favorites: [+profileId] }
        await Api.update("games", gameId, body, true);
    };
    return (
        <ToggleButton
            sx={{
                position: "absolute",
                bottom: "70px",
                right: "8px",
                borderRadius: "50%",
                backgroundColor: "#ffffff50",
                ":hover": { backgroundColor: "#ffffff80" },
            }}
            selected={selected}
            onChange={() => {
                setSelected(!selected);
                handleFavorite();
            }}
            color="error"
            value=""
        >
            <Favorite size="small" />
        </ToggleButton>
    );
};

export default FavoriteButton;
