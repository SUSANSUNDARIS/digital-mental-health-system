import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#4CAF50" }}>
      <Link to="/dashboard" style={{ margin: 10, color: "white" }}>Dashboard</Link>
      <Link to="/chatbot" style={{ margin: 10, color: "white" }}>Chatbot</Link>
      <Link to="/stress" style={{ margin: 10, color: "white" }}>Stress</Link>
      <Link to="/planner" style={{ margin: 10, color: "white" }}>Planner</Link>
      <Link to="/login" style={{ margin: 10, color: "white" }}>Login</Link>
    </nav>
  );
}

export default Navbar;
