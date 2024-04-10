import React, { useState,useContext } from "react";
import {UserContext,App} from "../App.js"
import "./LoginAltPage.css";
import axios from "axios";
import { useNavigate } from "react-router";

const LoginAltPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token,setToken]=useContext(UserContext)
  const regClient=axios.create({baseURL:"http://localhost:8080/auth/register"});
  const logClient=axios.create({baseURL:"http://localhost:8080/auth/token"});
  const navigate=useNavigate();
  const [isActive, setActive] = useState(false);

  const handleSignIn = (event) => {
    event.preventDefault();
    logClient.post("",{"username":companyName,"password":password}).then(
      (response)=>{
        setToken(response.data);
        console.log(token);
      }
    ).catch((error)=>{
      console.log("some error occured",error);
      alert("SignIn Failed.")
    });

    console.log("handle siginin");
  };

  

  const handleSignUp = (event) => {
    event.preventDefault();
    regClient.post("",{"name":companyName,"email":email,"password":password}).then((response)=>{
      
      alert(response.data);
      if(response.data!=="username already exist"){
      setActive(!isActive);
      }
    });
    console.log("handle sign up");

  };

  return (
    <div className="loginalt-parent">
      <div
        className={isActive ? "container active" : "container"}
        id="container"
      >
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <span>or use your email for registeration</span>
            <input type="text" onChange={(e) => setCompanyName(e.target.value)} placeholder="Company Name/Username" />
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleSignUp}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <span>using your Username & Password</span>
            <input type="text" onChange={(e) => setCompanyName(e.target.value)} placeholder="Username" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fmemes--325525879330590920%2F&psig=AOvVaw0hctVmj1g_dwvknuXH_UF0&ust=1712779094346000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiip731tYUDFQAAAAAdAAAAABAJ">
              Forget Your Password?
            </a>
            <button onClick={handleSignIn}>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button
                className="hidden"
                id="login"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(!isActive);
                }}
              >
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button
                className="hidden"
                id="register"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(!isActive);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAltPage;
