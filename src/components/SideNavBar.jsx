import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`side-nav ${isOpen ? "open" : "closed"}`}>
      {/* Toggle Button */}
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "←" : "→"}
      </button>

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="/dashboard">Dashboard</a>
        <a href="/employees">Employees</a>
        <a href="/departments">Departments</a>
        <a href="/roles">Roles</a>
        <a href="/leaves">Leaves</a>
        <a href="/reports">Reports</a>
      </nav>
    </div>
  );
};

export default SideNavBar;
