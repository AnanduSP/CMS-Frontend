import React, { useState } from 'react'
import { Container, Typography, Button, TextField, Box , Card, CardContent} from '@mui/material';
import './LoginPage.css'

const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ username: '', password: '' });

  const validateForm = () => {
    let isValid = true;
    setError({ username: '', password: '' });

    if (!username.trim()) {
      setError((prevState) => ({ ...prevState, username: 'Username is required' }));
      isValid = false;
    }
    if (!password.trim()) {
      setError((prevState) => ({ ...prevState, password: 'Password is required' }));
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
      setUsername('');
      setPassword('');
    }
  };

  return (
      <div className ="login">
      <Container maxWidth="sm" sx={{display: 'flex', justifyContent: 'center', alignItems:'space-around', height:'auto'}}>

        <Card elevation={5}>
          <CardContent>
        
        <Typography variant='h4'>
          Login
        </Typography>

        <form noValidate onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant='outlined'
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!error.username}
            helperText={error.username}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error.password}
            helperText={error.password}
          />

          <Box mt = {2}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          </Box>

        </form>
        </CardContent>
        </Card>
      </Container>
      </div>
    
  )
}

export default LoginPage