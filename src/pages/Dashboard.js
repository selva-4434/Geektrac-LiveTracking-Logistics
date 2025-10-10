import React, { useState, useEffect } from 'react';
import {
  FleetStatusChart,
  MobileVsWebChart,
  ObjectTypeChart,
  ModelWiseChart,
  ApplicationUsageChart,
  DeviceVsProjectChart,
  ObjectHealthChart,
  AlertsPanel,
  ImmobilizeChart,
  ImmobilizeStatusChart,
  ObjectGroupChart,
  InactiveDevicesChart
} from '../components/DashboardData';
import './Dashboard.css';
import Sidebar from './Sidebar';


const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [dashboardData, setDashboardData] = useState({});

  // Fetch live data from backend API
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://your-backend-url/api/dashboard-data');
  //       const data = await response.json();
  //       setDashboardData(data);
  //     } catch (error) {
  //       console.error('Error fetching dashboard data:', error);
  //     }
  //   };

  //   fetchData();
  //   const interval = setInterval(fetchData, 10000); // Refresh every 10s
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    // Simulated backend response
    const dummyData = {
      fleet: {
        running: 1,
        idle: 2,
        stopped: 3,
        inactive: 0,
        noData: 0,
        total: 6
      },
      objectType: {
        Vehicle: 3,
        Asset: 2,
        Person: 1
      },
      modelWise: {
        "Model A": 2,
        "Model B": 1,
        "Model C": 1,
        total: 4
      },
      mobileVsWeb: {
        Web: 4,
        Mobile: 2,
        total: 6
      },
      appUsage: {
        "Logged In": 0,
        "Not Logged In": 4,
        total: 4
      },
      deviceVsProject: {
        "Tracace Prem": 4,
        "FleetX": 2,
        "GeoTrack": 1
      },
      objectHealth: {
        Good: 3,
        Moderate: 2,
        Critical: 1,
        total: 6
      },
      alerts: {
        active: 5,
        inactive: 1
      },
      immobilize: {
        Configured: 1,
        "Not Configured": 1,
        total: 2
      },
      immobilizeStatus: {
        ON: 5,
        OFF: 1
      },
      objectGroup: {
        "TPTR Vehicle Group": 6,
        total: 6
      },
      inactiveDevices: {
        "> 30": 1,
        "> 15": 2,
        "> 7": 1,
        "> 3": 1,
        "> 1": 1
      },                              
      userSplit: "Web: 60%, Mobile: 40%",
      deviceStatus: "Active: 5, Inactive: 1"
    };
  
    setDashboardData(dummyData);
  }, []);

  if (!dashboardData || Object.keys(dashboardData).length === 0) {
    return <p>Loading dashboard...</p>;
  }

  return (
    <div className="dashboard-layout">
      
      {/* Sidebar */}
      <Sidebar setActiveSection={setActiveSection} />

      {/* Main panel */}
      <div className="main-panel">

        {/* Header with centered search bar */}
        <header className="top-header">
          <input
            type="text"
            placeholder="Search GeekTrac..."
            className="search-bar"
          />

          <div className="header-icons">
            <img
              src="/notification.png"
              alt="Notifications"
              className="icon-img"
              onClick={() => setActiveSection('notifications')}
            />
            <img
              src="/user.png"
              alt="User"
              className="icon-img"
              onClick={() => setActiveSection('user')}
            />
          </div>
        </header>

        {/* Conditional content rendering */}
        <section className="content-section">

        {activeSection === 'dashboard' && (
          <div className="dashboard-grid">

            {/* Card 1: Fleet Status */}
            <div className="card">
              <div className="card-header">
                <h3>Fleet Status</h3>
              </div>
              
              <div className="card-body fleet-layout">
                <div className="chart-area">
                  <FleetStatusChart data={dashboardData.fleet} />
                </div>
                <div className="legend-area">
                  <ul className="legend">
                    <li><span className="dot green" /> {dashboardData.fleet.running} Running</li>
                    <li><span className="dot orange" /> {dashboardData.fleet.idle} Idle</li>
                    <li><span className="dot red" /> {dashboardData.fleet.stopped} Stopped</li>
                    <li><span className="dot gray" /> {dashboardData.fleet.inactive} Inactive</li>
                    <li><span className="dot white" /> {dashboardData.fleet.noData} No Data</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Card: Model Wise Devices */}
            <div className="card">
              <div className="card-header">
                <h3>Model Wise Devices</h3>
              </div>
              <div className="card-body">
                {dashboardData?.modelWise ? (
                  <ModelWiseChart data={dashboardData.modelWise} />
                ) : (
                  <p>Loading chart...</p>
                )}
            </div>
          </div>

            {/* Card 3: Object Type */}
            <div className="card">
              <div className="card-header"><h3>Object Type</h3></div>
              <div className="card-body">
                {dashboardData?.objectType ? (
                <ObjectTypeChart data={dashboardData.objectType} />
              ) : (
              <p>Loading chart...</p>
              )}
              </div>
            </div>

            {/* Card 4: Web vs Mobile User */}
            <div className="card">
              <div className="card-header"><h3>Web vs Mobile User</h3></div>
            <div className="card-body">
              {dashboardData?.mobileVsWeb ? (
              <>
                <MobileVsWebChart data={dashboardData.mobileVsWeb} />
                <ul className="legend">
                <li><span className="dot blue" /> Web User</li>
                <li><span className="dot green" /> Mobile User</li>
                </ul>
              </>
              ) : (
                <p>Loading chart...</p>
              )}
              </div>
            </div>

            {/* Card 5: Application Usage */}
            <div className="card">
            <div className="card-header"><h3>Application Usage</h3></div>
            <div className="card-body">
            {dashboardData?.appUsage ? (
              <>
              <ApplicationUsageChart data={dashboardData.appUsage} />
              <ul className="legend">
              <li><span className="dot green" /> Logged In</li>
              <li><span className="dot red" /> Not Logged In</li>
              </ul>
              </>
            ) : (
              <p>Loading chart...</p>
            )}
            </div>
            </div>

            {/* Card 6: Devices vs Project */}
            <div className="card">
              <div className="card-header"><h3>Devices vs Project</h3></div>
            <div className="card-body">
              {dashboardData?.deviceVsProject ? (
                <DeviceVsProjectChart data={dashboardData.deviceVsProject} />
              ) : (
                <p>Loading chart...</p>
              )}
              </div>
            </div>

            {/* Card 7: Object Health */}
            <div className="card">
              <div className="card-header"><h3>Object Health</h3></div>
              <div className="card-body">
                {dashboardData?.objectHealth ? (
                  <ObjectHealthChart data={dashboardData.objectHealth} />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>

            {/* Card 8: Alerts */}
            <div className="card">
              <div className="card-header"><h3>Alerts</h3></div>
              <div className="card-tools">
                  {/* <img src="/alert.png" alt="alert" /> */}
                </div>
              <div className="card-body">
                {dashboardData?.alerts ? (
                  <AlertsPanel data={dashboardData.alerts} />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>

            {/* Card 9: Immobilize */}
            <div className="card">
              <div className="card-header"><h3>Immobilize</h3></div>
              <div className="card-body">
              {dashboardData?.immobilize ? (
                  <ImmobilizeChart data={dashboardData.immobilize} />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>

            {/* Card 10:Immobilize Status */}
            <div className="card">
              <div className="card-header"><h3>Immobilize Status</h3></div>
              <div className="card-body">
              {dashboardData?.immobilizeStatus ? (
                  <ImmobilizeStatusChart data={dashboardData.immobilizeStatus} />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>

            {/* Card 11:Object Group */}
            <div className="card">
              <div className="card-header"><h3>Object Group</h3></div>
              <div className="card-body">
              {dashboardData?.objectGroup ? (
                  <ObjectGroupChart data={dashboardData.objectGroup} />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>

            {/* Card 12: Inactive vs Active Devices */}
            <div className="card">
              <div className="card-header"><h3>Inactive vs Active Devices</h3></div>
              <div className="card-body">
              {dashboardData?.inactiveDevices ? (
                  <InactiveDevicesChart data={dashboardData.inactiveDevices} />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
      </div>
    </div>
  );
};

export default Dashboard;
