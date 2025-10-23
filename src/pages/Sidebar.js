import React, { useState, useRef } from 'react';
import './Dashboard.css';

const Sidebar = ({ setActiveSection }) => {
  const [activeReportCategory, setActiveReportCategory] = useState(null);
  const [activeChartCategory, setActiveChartCategory] = useState(null);
  const [activeSettingsCategory, setActiveSettingsCategory] = useState(null);
  const [apiResponse, setApiResponse] = useState(null); // Stores dummy API response

  const reportCategoryRefs = useRef({});
  const chartCategoryRefs = useRef({});
  const settingsCategoryRefs = useRef({});

  const reportItems = { 
    Activity: [ 'Travel', 'Travel History', 'Trip', 'Stoppage', 'Idle', 'Inactive', 'Speed vs Distance', 'Object Status', 
    'Daywise Distance', 'Overspeed Summary', 'Daywise Work Hour' ], 
    GeofenceAddress: ['Geofence', 'Address' ,'Fence Inside Travel Report' , 'Fence Outside Travel Report'], 
    Sensor: ['Ignition', 'Air Conditioner' , 'Air Conditioner Misused' ,'Analog Data' , 'RFID Data' , 'Digital Ports' , 
    'Immobilize'], 
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

  const chartItems = { 
    Activity: ['Distance ', 'Duration'], 
    Alert: ['ALerts'], Fuel: ['Fill-Drain', 'Fuel Economy'], 
    Expense: ['Cost Distribution', 'Cost By Time'], 
    Temperature: ['Temperature'], 
    Load: ['Load Graph'], 
  };

    const settingsItems = { 
      General: ['Admin', 'Reseller' , 'Company', 'Company Subuser' , 'Branch' , 'Object' ,'Driver' , 'Alert' , 
      'Remaind Rule'], 
      Master: ['Expense', 'Job' , 'Route Optimization' ,'Driver Rating' , 'Object Group' ,'Classify Trip' , 
      'Send Command' , 'Announcement' , 'Address' ,'Geofence' ,'User Customized API' , 'Cloud Download' ,
      'SOP Definition'], Tire: ['Tire', 'Define Axle' , 'Tire Operation', 'Tire Inspction'], 
      Technician: ['Technician', 'Technician Task'], 
      Billing: ['Tariff Plan'], 
    };	

  const handleCategoryHover = (category, setter) => {
    setter(category);
  };

  // Clears API response when switching section
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setApiResponse(null);
    setActiveReportCategory(null); // Reset dropdown
    setActiveChartCategory(null);
    setActiveSettingsCategory(null);
  };

  // Dummy API call on sub-item click
  const handleItemClick = (item) => {
    console.log(`Welcome to Geektrac: ${item}`);
    handleSectionChange(item);

    fetch(`https://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random() * 10 + 1)}`)
      .then(res => res.json())
      .then(data => {
        console.log(`Dummy API response for "${item}":`, data);
        setApiResponse(data);
      })
      .catch(err => {
        console.error("Dummy API error:", err);
      });
  };

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <img src="/logo-file.png" alt="Geektrac Logo" className="logo" />
        </div>

        <nav className="sidebar-nav">
          <button onClick={() => handleSectionChange('dashboard')} className="button">
            <img src="/dashboard.png" alt="Dashboard" className="logo-image" />
            <span className="label">Dashboard</span>
          </button>

          <button onClick={() => handleSectionChange('tracking')} className="button">
            <img src="/tracking.png" alt="Tracking" className="logo-image" />
            <span className="label">Tracking</span>
          </button>

          {/* Reports */}
          <div className="hover-zone">
            <button className="button">
              <img src="/report.png" alt="Reports" className="logo-image" />
              <span className="label">Reports</span>
            </button>
            <div className="dropdown-wrapper" onMouseLeave={() => setActiveReportCategory(null)}>
              <div className="dropdown-floating">
                {Object.keys(reportItems).map((category) => (
                  <div
                    key={category}
                    className={`report-category ${activeReportCategory === category ? 'active' : ''}`}
                    onMouseEnter={() => handleCategoryHover(category, setActiveReportCategory)}
                    ref={(el) => (reportCategoryRefs.current[category] = el)}
                  >
                    {category}
                  </div>
                ))}
              </div>

              {activeReportCategory && (
                <div className="sub-dropdown">
                  {reportItems[activeReportCategory].map((item) => (
                    <div
                      key={item}
                      className="report-item"
                      onClick={() => handleItemClick(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Charts */}
          <div className="hover-zone">
            <button className="button">
              <img src="/charts.png" alt="Charts" className="logo-image" />
              <span className="label">Charts</span>
            </button>
            <div className="dropdown-wrapper" onMouseLeave={() => setActiveChartCategory(null)}>
              <div className="dropdown-floating">
                {Object.keys(chartItems).map((category) => (
                  <div
                    key={category}
                    className={`report-category ${activeChartCategory === category ? 'active' : ''}`}
                    onMouseEnter={() => handleCategoryHover(category, setActiveChartCategory)}
                    ref={(el) => (chartCategoryRefs.current[category] = el)}
                  >
                    {category}
                  </div>
                ))}
              </div>

              {activeChartCategory && (
                <div className="sub-dropdown">
                  {chartItems[activeChartCategory].map((item) => (
                    <div
                      key={item}
                      className="report-item"
                      onClick={() => handleItemClick(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Settings */}
          <div className="hover-zone">
            <button className="button">
              <img src="/settings.png" alt="Settings" className="logo-image" />
              <span className="label">Settings</span>
            </button>
            <div className="dropdown-wrapper" onMouseLeave={() => setActiveSettingsCategory(null)}>
              <div className="dropdown-floating">
                {Object.keys(settingsItems).map((category) => (
                  <div
                    key={category}
                    className={`report-category ${activeSettingsCategory === category ? 'active' : ''}`}
                    onMouseEnter={() => handleCategoryHover(category, setActiveSettingsCategory)}
                    ref={(el) => (settingsCategoryRefs.current[category] = el)}
                  >
                    {category}
                  </div>
                ))}
              </div>

              {activeSettingsCategory && (
                <div className="sub-dropdown">
                  {settingsItems[activeSettingsCategory].map((item) => (
                    <div
                      key={item}
                      className="report-item"
                      onClick={() => handleItemClick(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button onClick={() => handleSectionChange('cloud')} className="button">
            <img src="/cloud-computing.png" alt="Cloud" className="logo-image" />
            <span className="label">Cloud</span>
          </button>

          <button onClick={() => handleSectionChange('support')} className="button">
            <img src="/support.png" alt="Support" className="logo-image" />
            <span className="label">Support</span>
          </button>
        </nav>
      </aside>

      {/*Dummy API response display */}
      {apiResponse && (
        <div className="api-response-box">
          <h4>Dummy API Response</h4>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default Sidebar;
