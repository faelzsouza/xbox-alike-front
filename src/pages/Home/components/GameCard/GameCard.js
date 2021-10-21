import "./GameCard.scss";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import FavoriteButton from "./FavoriteButton";
import { GameDetailsModal } from "../GameDetails/GameDetails";

const GameCard = ({ games, _selected }) => {
    const [open, setOpen] = useState(false);
    const handleOpenClose = () => {
        console.log(open);
        setOpen(!open);
    };
    return games.map((game, idx) => (
        <Card
            sx={{ width: 141, marginTop: "2rem", position: "relative" }}
            key={`game-card${idx}`}
            className="game-card"
        >
            <FavoriteButton
                gameId={game.id || game.game.id}
                _selected={_selected}
            />
            <GameDetailsModal
                cover={game.cover || game.game.cover}
                gameId={game.id || game.game.id}
            />
            <CardContentNoPadding sx={{ maxHeight: "2rem" }}>
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontSize: "1em" }}
                    onClick={handleOpenClose}
                >
                    {game.title || game.game.title}
                </Typography>

                {/*                 <Button size="small" variant="outlined">Detalhes</Button> */}
            </CardContentNoPadding>
        </Card>
    ));
};

const CardContentNoPadding = styled(CardContent)(`
    &:last-child {
        padding-bottom: 1rem
    }
`);

export default GameCard;
