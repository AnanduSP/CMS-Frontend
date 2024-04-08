import React, { useState } from "react";
import { Container, Button, TextField } from "@mui/material";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ username: "", password: "" });

  const validateForm = () => {
    let isValid = true;
    setError({ username: "", password: "" });

    if (!username.trim()) {
      setError((prevState) => ({
        ...prevState,
        username: "Username is required",
      }));
      isValid = false;
    }
    if (!password.trim()) {
      setError((prevState) => ({
        ...prevState,
        password: "Password is required",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log(username); // handle submission logic here
      console.log(password);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login">
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "space-around",
          height: "auto",
        }}
      >
        <div className="login-form">
          <h2 variant="h4">Login</h2>

          <form noValidate onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={!!error.username}
              helperText={error.username}
              sx={{ mb: 3 }}
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!error.password}
              helperText={error.password}
              sx={{ mb: 3 }}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
          <div className="registration-footer">
            Dont have a account? &nbsp;
            <Link to="/genral/register">Register Here</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
