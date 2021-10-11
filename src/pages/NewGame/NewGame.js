import './NewGame.scss'

import React from 'react'
import { Box, styled } from '@mui/system'
import { TextField } from '@mui/material'
import GenresCheckbox from '../../components/structure/GenresCheckbox/GenresCheckbox'
import NewGenre from '../../components/structure/NewGenre/NewGenre'

const NewGame = () => {
    const handleGenresCheck = (checked) => {
        console.log(checked)
    }
    return (
        <BoxEdited component="form">
            <TextFieldEdited label="Title" name='title' />
            <TextFieldEdited label="Cover Link" name='cover' />
            <TextFieldEdited label="Description" name='description' />
            <TextFieldEdited label="Release Year" name='year' />
            <TextFieldEdited label="IMDB Rate" name='imdb' />
            <TextFieldEdited label="Embed Trailer Link" name='trailer' />
            <TextFieldEdited label="Embed Gameplay Link" name='gameplay' />
            <GenresCheckbox onGenresChecked={handleGenresCheck} />
        </BoxEdited>
    )
}

const BoxEdited = styled(Box)(`
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: auto;
    max-width: 500px;
`)

const TextFieldEdited = styled(TextField)(`
    margin-top: 1rem;
`)

export default NewGame
