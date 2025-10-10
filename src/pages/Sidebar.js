// src/pages/Sidebar.js
import React from 'react';
import './Dashboard.css'; 

const Sidebar = ({ setActiveSection }) => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="/logo-file.png" alt="Geektrac Logo" className="logo" />
      </div>
      <nav className="sidebar-nav">
        <button onClick={() => setActiveSection('dashboard')} className="button">
          <img src="/dashboard.png" alt="dashboard Logo" className="logo-image" />
          <span className="label">Dashboard</span>
        </button>

        <button onClick={() => setActiveSection('tracking')} className="button">
          <img src="/tracking.png" alt="Logo" className="logo-image" />
          <span className="label">Tracking</span>
        </button>

        <button onClick={() => setActiveSection('reports')} className="button">
          <img src="/report.png" alt="Logo" className="logo-image" />
          <span className="label">Reports</span>
        </button>

        <button onClick={() => setActiveSection('charts')} className="button">
          <img src="/charts.png" alt="Logo" className="logo-image" />
          <span className="label">Charts</span>
        </button>

        <button onClick={() => setActiveSection('settings')} className="button">
          <img src="/settings.png" alt="Logo" className="logo-image" />
          <span className="label">Settings</span>
        </button>

        <button onClick={() => setActiveSection('cloud')} className="button">
          <img src="/cloud-computing.png" alt="Logo" className="logo-image" />
          <span className="label">Cloud</span>
        </button>

        <button onClick={() => setActiveSection('support')} className="button">
          <img src="/support.png" alt="Logo" className="logo-image" />
          <span className="label">Support</span>
        </button>
      </nav>

      <div className="sidebar-footer">Powered by GeekTrac</div>
    </aside>
  );
};

export default Sidebar;
