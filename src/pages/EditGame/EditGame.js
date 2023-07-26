import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { Api } from "../../api/api";
import GenresCheckbox from "../NewGame/components/GenresCheckbox/GenresCheckbox";
import { useParams } from "react-router-dom";
import { BoxEdited, TextFieldEdited } from "../NewGame/NewGame";

const EditGame = ({history}) => {
    const [genresList, setGenresList] = useState([]);
    const [game, setGame] = useState(undefined);

    const { gameId } = useParams();
    const handleGenresCheck = (checked) => {
        setGenresList(checked);
    };

    useEffect(async () => {
        const response = await Api.getById("games", gameId, true);
        const resGame = await response.json();
        setGame(resGame);
    }, []);

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

        await Api.update("games", gameId, payload, true);
        history.push('/')
    };
    if (game) {
        return (
            <BoxEdited component="form" onSubmit={handleSubmit}>
                <TextFieldEdited
                    label="Title"
                    name="title"
                    defaultValue={game && game.title}
                    required
                />
                <TextFieldEdited
                    label="Cover Link"
                    name="cover"
                    type="url"
                    defaultValue={game && game.cover}
                    multiline
                    required
                />
                <TextFieldEdited
                    label="Description"
                    name="description"
                    defaultValue={game && game.description}
                    multiline
                    required
                />
                <TextFieldEdited
                    label="Release Year"
                    name="year"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    helperText="Enter 4 digits, please"
                    defaultValue={game && game.year}
                />
                <TextFieldEdited
                    label="IMDB Rate"
                    name="imdb"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    helperText="0-10"
                    defaultValue={game && game.imdb}
                />
                <TextFieldEdited
                    label="Embed Trailer Link"
                    name="trailer"
                    type="url"
                    defaultValue={game && game.trailer}
                    multiline
                />
                <TextFieldEdited
                    label="Embed Gameplay Link"
                    name="gameplay"
                    type="url"
                    defaultValue={game && game.gameplay}
                    multiline
                />
                <GenresCheckbox onGenresChecked={handleGenresCheck} />
                <Button
                    type="submit"
                    size="large"
                    sx={{ width: 100, display: "block", margin: "2rem auto 0" }}
                    variant="contained"
                >
                    Submit
                </Button>
            </BoxEdited>
        );
    }
    return <div></div>;
};

export default EditGame;
