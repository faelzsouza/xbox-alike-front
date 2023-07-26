import React, { useState } from "react";
import { Box, styled } from "@mui/system";
import { Button, TextField } from "@mui/material";
import GenresCheckbox from "./components/GenresCheckbox/GenresCheckbox";
import { Api } from "../../api/api";

const NewGame = () => {
    const [genresList, setGenresList] = useState([]);

    const handleGenresCheck = (checked) => {
        setGenresList(checked);
    };

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
            <TextFieldEdited
                label="Title"
                name="title"
                required
            />
            <TextFieldEdited
                label="Cover Link"
                name="cover"
                type="url"
                required
            />
            <TextFieldEdited
                label="Description"
                name="description"
                required
            />
            <TextFieldEdited
                label="Release Year"
                name="year"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                helperText="Enter 4 digits, please"
            />
            <TextFieldEdited
                label="IMDB Rate"
                name="imdb"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                helperText="0-10"
            />
            <TextFieldEdited
                label="Embed Trailer Link"
                name="trailer"
                type="url"
            />
            <TextFieldEdited
                label="Embed Gameplay Link"
                name="gameplay"
                type="url"
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
