import "./GamesList.scss";
import React, { useEffect, useState } from "react";
import { Api } from "../../../api/api";
import VideoEmbed from "../VideoEmbed/VideoEmbed";
import GameCard from "../GameCard/GameCard";

const GamesList = () => {
    const [ games, setGames ] = useState([]);

    const fetchGetAll = async () => {
        const response = await Api.getAll();
        const res = await response.json();
        setGames(res);
    };

    useEffect(() => fetchGetAll(), []);
    console.log(games)
    return (
        <div className="games-group">
            <GameCard games={games} />
        </div>
    );
};

export default GamesList;
