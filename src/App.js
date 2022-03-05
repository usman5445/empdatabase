import "./App.css";
import CardContainer from "./components/cardContainer";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmp from "./components/addEmp";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/add" element={<AddEmp />} />
          <Route path="/" element={<CardContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
