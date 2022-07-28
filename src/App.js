import React from "react";
import "./App.css";

import Home from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
    </Router>
  );
}

export default App;
