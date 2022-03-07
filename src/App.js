import "./App.css";
import CardContainer from "./components/cardContainer";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmp from "./components/addEmp";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { LoginOutlined } from "@mui/icons-material";
function App() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/add" element={<AddEmp />} />
          <Route path="/" element={<CardContainer />} />
        </Routes>
      </div>
    </Router>
  ) : (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "monospace",
      }}
    >
      <h1 style={{ fontSize: "4rem", width: "50%", marginLeft: "5%" }}>
        Welcome to the world of our valueble
        <span style={{ color: "blue" }}> #Employees...</span>
      </h1>
      <Button
        color="primary"
        onClick={() => loginWithRedirect()}
        startIcon={<LoginOutlined />}
        variant="contained"
        sx={{ width: "fit-content", marginLeft: "10%", fontSize: "2rem" }}
      >
        Get Started
      </Button>
    </div>
  );
}

export default App;
