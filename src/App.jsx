import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Results from "../src/pages/Results";
import '../src/pages/App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}
