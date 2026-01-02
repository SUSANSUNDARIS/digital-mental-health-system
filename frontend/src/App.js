import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LanguageSelect from "./pages/LanguageSelect";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/Chatbot";
import StressAnalysis from "./pages/StressAnalysis";
import StudyPlanner from "./pages/StudyPlanner";
import Appointment from "./pages/Appointment";
import Feedback from "./pages/Feedback";
import Motivation from "./pages/Motivation";
import Challenges from "./pages/Challenges";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LanguageSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/stress" element={<StressAnalysis />} />
        <Route path="/planner" element={<StudyPlanner />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </Router>
  );
}

export default App;
