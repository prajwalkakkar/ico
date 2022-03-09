import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./ContactPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
