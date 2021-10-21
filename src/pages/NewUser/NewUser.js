import { Button } from "@mui/material";
import React from "react";
import { BoxEdited, TextFieldEdited } from "../NewGame/NewGame";
import { Api } from "../../api/api";

const NewUser = ({ history }) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            name: event.target.name.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            password: event.target.password.value,
            cpf: event.target.cpf.value,
        };
        await Api.insert("users", payload, false);
        history.push("/login");
    };
    return (
        <BoxEdited component="form" onSubmit={handleSubmit}>
            <TextFieldEdited label="Name" name="name" required />
            <TextFieldEdited label="Last Name" name="lastName" required />
            <TextFieldEdited label="CPF" name="cpf" type="number" required />
            <TextFieldEdited
                label="E-mail"
                name="email"
                type="email"
                required
            />
            <TextFieldEdited
                label="Password"
                name="password"
                type="password"
                required
            />
            <Button
                type="submit"
                variant="contained"
                sx={{ width: "10rem", display: "block", margin: "1rem auto" }}
            >
                Submit
            </Button>
        </BoxEdited>
    );
};

export default NewUser;
