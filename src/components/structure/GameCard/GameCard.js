import "./GameCard.scss";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const GameCard = (props) => {
    return props.games.map((game, idx) => (
        <Card sx={{ width: 300 }} key={idx} className="game-card">
            <CardMedia component="img" image={game.cover} height="428" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {game.title}
                </Typography>
                <CardActions>
                    <Button size="small" variant="outlined">Detalhes</Button>
                </CardActions>
            </CardContent>
        </Card>
    ));
};

export default GameCard;
