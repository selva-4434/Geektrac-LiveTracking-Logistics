import React, { useState, useRef } from 'react';
import './Dashboard.css';

const Sidebar = ({ setActiveSection }) => {
  const [reportsExpanded, setReportsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [submenuTop, setSubmenuTop] = useState(100); 
  const categoryRefs = useRef({});

  const reportItems = {
    Activity: [
      'Travel',
      'Travel History',
      'Trip',
      'Stoppage',
      'Idle',
      'Inactive',
      'Speed vs Distance',
      'Object Status',
      'Daywise Distance',
      'Overspeed Summary',
      'Daywise Work Hour'
    ],
    GeofenceAddress: ['Geofence', 'Address' ,'Fence Inside Travel Report' , 
    'Fence Outside Travel Report'],
    Sensor: ['Ignition', 'Air Conditioner' , 'Air Conditioner Misused' ,'Analog Data' ,
    'RFID Data' , 'Digital Ports' , 'Immobilize'],
    Alert: ['Object Alert', 'Device Alert' ,'SMS Email Stauts' , 'Alert Status'],
    Reminder: ['Remainder Status', 'Acknowledgement History'],
    Expense: ['Object Cost', 'Maintenance History', 'Categorywise Maintanance'],
    Fuel: ['Fill Drain', 'Fuel Economy', 'Fuel Consumption'],
    RPM: ['RPM Summary' , 'RPM Status'],
    Temperature: ['Temp Status' , 'Temp Summary'],
    Job: ['Today Job Status', 'Job Summary ', 'Object Job Summary' , 'Divers Job Summary'],
    Elock: ['Elock Status', 'violation Summary', 'Lock Unlock Summary'],
    Tire: ['Tire Event Summary ', 'Maintenance History', 'Categorywise Maintanance'],
    Driver: ['Driver Activity', 'Driver Work Hour', 'Driver Violation' , 'Perfection Score'],
    OBD: ['Health Status', 'Engine Temp', 'Battery Voltage'],
    Billing: ['Payment Detail', 'Postpaid Billing History', 'Object Expiry Log', 'Admin Wise Object'],

  };

  const toggleReports = () => {
    setReportsExpanded((prev) => !prev);
    setActiveCategory(null);
  };

  const toggleCategory = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
    const ref = categoryRefs.current[category];
    if (ref) {
      const rect = ref.getBoundingClientRect();
      setSubmenuTop(rect.top);
    }
  };
  

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <img src="/logo-file.png" alt="Geektrac Logo" className="logo" />
        </div>

        <nav className="sidebar-nav">
          <button onClick={() => setActiveSection('dashboard')} className="button">
            <img src="/dashboard.png" alt="Dashboard" className="logo-image" />
            <span className="label">Dashboard</span>
          </button>

          <button onClick={() => setActiveSection('tracking')} className="button">
            <img src="/tracking.png" alt="Tracking" className="logo-image" />
            <span className="label">Tracking</span>
          </button>

          <button onClick={toggleReports} className="button">
            <img src="/report.png" alt="Reports" className="logo-image" />
            <span className="label">Reports</span>
          </button>

          <button onClick={() => setActiveSection('charts')} className="button">
            <img src="/charts.png" alt="Charts" className="logo-image" />
            <span className="label">Charts</span>
          </button>

          <button onClick={() => setActiveSection('settings')} className="button">
            <img src="/settings.png" alt="Settings" className="logo-image" />
            <span className="label">Settings</span>
          </button>

          <button onClick={() => setActiveSection('cloud')} className="button">
            <img src="/cloud-computing.png" alt="Cloud" className="logo-image" />
            <span className="label">Cloud</span>
          </button>

          <button onClick={() => setActiveSection('support')} className="button">
            <img src="/support.png" alt="Support" className="logo-image" />
            <span className="label">Support</span>
          </button>
        </nav>
      </aside>

      {/* Floating dropdown beside sidebar */}
      {reportsExpanded && (
        <div className="reports-floating">
          {Object.keys(reportItems).map((category) => (
            <div
              key={category}
              className={`report-category ${activeCategory === category ? 'active' : ''}`}
              onClick={() => toggleCategory(category)}
              ref={(el) => (categoryRefs.current[category] = el)}
            >
              {category}
            </div>
          ))}
        </div>
      )}

      {activeCategory && (
        <div className="sub-dropdown" style={{ top: submenuTop + 'px' }}>
          {reportItems[activeCategory].map((item) => (
            <div
              key={item}
              className="report-item"
              onClick={() => setActiveSection(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Sidebar;
