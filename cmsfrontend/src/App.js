import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import RegisterPage from "./pages/RegisterPage";
import CreateCompanyPage from "./pages/CreateCompanyPage";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create-company" element={<CreateCompanyPage />} />
      </Routes>

      {/* <Button variant="contained">MUI BUTTON</Button> */}
    </div>
  );
}

export default App;
