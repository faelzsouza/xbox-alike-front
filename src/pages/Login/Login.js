import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Api } from "../../api/api";
import { JwtHandler } from "../../local-storage/jwt-handler";
import { TextFieldEdited } from "../NewGame/NewGame";

const Login = (props) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const payload = {
            email,
            password,
        };

        const response = await Api.login(payload);

        const body = await response.json();

        if (response.status === 200) {
            const accessToken = body.accessToken;
            JwtHandler.setJwt(accessToken);
            console.log(accessToken);

            props.history.push("/");
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextFieldEdited label="E-mail" name="email" />
            <TextFieldEdited label="Password" name="password" type="password" />
            <Button type="submit">Send</Button>
        </Box>
    );
};

export default Login;
