import "./GamesList.scss";
import React, { useEffect, useState } from "react";
import { Api } from "../../../api/api";

const GamesList = () => {
    const [ games, setGames ] = useState([]);

    const fetchGetAll = async () => {
        const response = await Api.getAll();
        const res = await response.json();
        setGames(res);
    };

    useEffect(() => fetchGetAll(), []);

    return (
        <div className="list-group">
            { games.map((game, idx) => (
                <div key={idx}>
                <div>{game.name}</div>
                {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx + 1}.png`}/> */}
                </div>
            )) }
        </div>
    );
};

export default GamesList;
