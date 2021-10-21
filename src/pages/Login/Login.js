import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Api } from "../../api/api";
import { JwtHandler } from "../../local-storage/jwt-handler";
import { BoxEdited, TextFieldEdited } from "../NewGame/NewGame";

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

            localStorage.setItem('userId', body.userId);

            // salva o JWT no localStorage
            JwtHandler.setJwt(accessToken);

            props.history.push(`/profiles`);
        }
    };

    return (
        <BoxEdited component="form" onSubmit={handleSubmit}>
            <TextFieldEdited label="E-mail" name="email" />
            <TextFieldEdited label="Password" name="password" type="password" />
            <Button type="submit" variant="contained" sx={{width: "10rem", display: "block", margin: "1rem auto"}}>Sign in</Button>
            <Button sx={{width: "10rem", display: "block", margin: "1rem auto"}}><Link to='/user/create'>Sign up</Link></Button>
        </BoxEdited>
    );
};

export default Login;
