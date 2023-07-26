import { Button, Snackbar, Stack } from "@mui/material";
import React, { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../api/api";
import { JwtHandler } from "../../local-storage/jwt-handler";
import { BoxEdited, TextFieldEdited } from "../NewGame/NewGame";
import MuiAlert from '@mui/material/Alert';

const Login = (props) => {
    const [error, setError] = useState(false)
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

            localStorage.setItem("userId", body.userId);

            // salva o JWT no localStorage
            JwtHandler.setJwt(accessToken);

            props.history.push(`/profiles`);
        } else {
            setError(true)
        }
    };

    return (
        <BoxEdited component="form" onSubmit={handleSubmit}>
            <TextFieldEdited label="E-mail" name="email" required />
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
                Sign in
            </Button>
            <Button
                sx={{ width: "10rem", display: "block", margin: "1rem auto" }}
            >
                <Link to="/user/create">Sign up</Link>
            </Button>
            {error && <ErrorSnackbar />}
        </BoxEdited>
    );
};

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ErrorSnackbar() {
    const [open, setOpen] = useState(true);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);

      window.location.reload();
    };
  
    return (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            E-mail or password invalid! Try again!
          </Alert>
        </Snackbar>
      </Stack>
    );
  }

export default Login;
