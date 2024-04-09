import React, { useState } from "react";
import "./LoginAltPage.css";

const LoginAltPage = () => {
  const handleSignIn = () => {
    console.log("handle siginin");
  };

  const [isActive, setActive] = useState(false);

  const handleSignUp = () => {
    console.log("hand sign up");
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
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Amount" />
            <button onClick={handleSignUp}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <span>using your email & password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fmemes--325525879330590920%2F&psig=AOvVaw0hctVmj1g_dwvknuXH_UF0&ust=1712779094346000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiip731tYUDFQAAAAAdAAAAABAJ">
              Forget Your Password?
            </a>
            <button>Sign In</button>
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
