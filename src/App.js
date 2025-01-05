import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AddTaskPage from "./pages/AddTask";
import EditTaskPage from "./pages/EditTask";
// import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div style={{ margin: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-task" element={<AddTaskPage />} />
          <Route path="/edit-task/:id" element={<EditTaskPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
