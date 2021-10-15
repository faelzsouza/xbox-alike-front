import "./GameCard.scss";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from "@mui/system";

const GameCard = (props) => {
    return props.games.map((game, idx) => (
        <Card sx={{ width: 141, marginTop: "2rem"}} key={`game-card${idx}`} className="game-card">
            <CardMedia component="img" image={game.cover} height="216" className="game-card__image" />
            <CardContentNoPadding>
{/*                 <Typography gutterBottom variant="h6" component="div">
                    {game.title}
                </Typography> */}
                <CardActionsEdited className="buttons-group">
                    <Button size="small" variant="outlined">Detalhes</Button>
                    <Button size="small" variant="outlined">Favoritar</Button>
                </CardActionsEdited>
            </CardContentNoPadding>
        </Card>
    ));
};

const CardContentNoPadding = styled(CardContent)(`
    padding: 0;
    &:last-child {
        padding-bottom: 0
    }
`)

const CardActionsEdited = styled(CardActions)(`
    >:not(:first-of-type) {
        margin-left: 0
    }
`)


export default GameCard;
