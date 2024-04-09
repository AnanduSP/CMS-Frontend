import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios"
import React, { useState } from "react";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCredential, setUserCredential]=useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setUserCredential({name:companyName,email:email,password:password});
    const regClient=axios.create({baseURL:"http://localhost:8080/auth/register"});
    regClient.post("",userCredential).then((response)=>{
      alert(response.data);
    });
    
  }
  return (
    <div className="register-parent">
      <h2>Registeration Form</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Company Name"
          onChange={(e) => setCompanyName(e.target.value)}
          value={companyName}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="password"
          variant="outlined"
          color="secondary"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          fullWidth
          sx={{ mb: 4 }}
        />

        <Button variant="contained" type="submit" fullWidth>
          Register
        </Button>
      </form>
      <div className="registration-footer">
        Already have an account?&nbsp;<Link to="/genral/login">Login Here</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
