import { Button } from '@mui/material'
import React from 'react'
import { Api } from '../../api/api'
import { BoxEdited, TextFieldEdited } from '../NewGame/NewGame'

const NewProfile = ({history}) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            title: event.target.title.value,
            image: event.target.image.value,
            userId: +localStorage.getItem('userId')
        }
        await Api.insert('profiles', payload, true)
        history.push("/profiles")
    }

    return (
        <BoxEdited component='form' onSubmit={handleSubmit}>
            <TextFieldEdited label="Title" name="title" required />
            <TextFieldEdited label="Image Link" name="image" />
            <Button type="submit">Submit</Button>
        </BoxEdited>
    )
}

export default NewProfile
