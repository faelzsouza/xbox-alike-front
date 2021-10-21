import "./NewGame.scss";

import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import { Button, TextField } from "@mui/material";
import GenresCheckbox from "./components/GenresCheckbox/GenresCheckbox";
import { Api } from "../../api/api";
import { useLocation } from "react-router";

const NewGame = () => {
    const query = new URLSearchParams(useLocation().search);
    const gameId = query.get('game')
    const edit = query.get('edit')
    
    const [genresList, setGenresList] = useState([]);
    const [game, setGame] = useState(undefined);

    const handleGenresCheck = (checked) => {
        setGenresList(checked);
    };

    if (edit) {
        useEffect(async () => {
            const response = await Api.getById('games', gameId, true)
            const resGame = await response.json()
            setGame(resGame)
        }, [])
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const payload = {
            title: event.target.title.value,
            cover: event.target.cover.value,
            description: event.target.description.value,
            year: +event.target.year.value,
            imdb: +event.target.imdb.value,
            trailer: event.target.trailer.value,
            gameplay: event.target.gameplay.value,
            genres: genresList,
        };

        await Api.insert("games", payload, true);
        window.location.reload();
    };
    return (
        <BoxEdited component="form" onSubmit={handleSubmit}>
            <TextFieldEdited label="Title" name="title" defaultValue={game && game.title} required />
            <TextFieldEdited label="Cover Link" name="cover" defaultValue={game && game.cover} required />
            <TextFieldEdited label="Description" name="description" defaultValue={game && game.description} required />
            <TextFieldEdited label="Release Year" name="year" type="number" defaultValue={game && game.year} />
            <TextFieldEdited label="IMDB Rate" name="imdb" type="number" defaultValue={game && game.imdb}/>
            <TextFieldEdited label="Embed Trailer Link" name="trailer" defaultValue={game && game.trailer} />
            <TextFieldEdited label="Embed Gameplay Link" name="gameplay" defaultValue={game && game.gameplay} />
            <GenresCheckbox onGenresChecked={handleGenresCheck} />
            <Button type="submit">Submit</Button>
        </BoxEdited>
    );
};

export const BoxEdited = styled(Box)(`
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: auto;
    max-width: 500px;
`);

export const TextFieldEdited = styled(TextField)(`
    margin-top: 1rem;
`);

export default NewGame;
