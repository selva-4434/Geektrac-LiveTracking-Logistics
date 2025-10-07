import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// FleetStatusChart
export const FleetStatusChart = ({ data }) => {
  const chartData = {
    labels: ['Running', 'Idle', 'Stopped', 'Inactive', 'No Data'],
    datasets: [{
      data: [data.running, data.idle, data.stopped, data.inactive, data.noData],
      backgroundColor: ['#4caf50', '#ff9800', '#f44336', '#9e9e9e', '#ffffff'],
    }],
  };
  return <Doughnut data={chartData} />;
};

// ModelWiseChart
export const ModelWiseChart = ({ data }) => {
  const labels = Object.keys(data).filter(k => k !== 'total');
  const values = labels.map(label => data[label]);
  const chartData = {
    labels,
    datasets: [{
      data: values,
      backgroundColor: ['#3f51b5', '#2196f3', '#00bcd4'],
    }],
  };
  return <Doughnut data={chartData} />;
};


// ObjectTypeChart
export const ObjectTypeChart = ({ data }) => {
  const labels = Object.keys(data);
  const values = Object.values(data);
  const chartData = {
    labels,
    datasets: [{
      data: values,
      backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
    }],
  };
  return <Doughnut data={chartData} />;
};


// MobileVsWebChart
export const MobileVsWebChart = ({ data }) => {
  const labels = Object.keys(data).filter(k => k !== 'total');
  const values = labels.map(label => data[label]);
  const chartData = {
    labels,
    datasets: [{
      data: values,
      backgroundColor: ['#2196f3', '#4caf50'],
    }],
  };
  return <Doughnut data={chartData} />;
};

// ApplicationUsageChart
export const ApplicationUsageChart = ({ data }) => {
  const labels = Object.keys(data).filter(k => k !== 'total');
  const values = labels.map(label => data[label]);
  const chartData = {
    labels,
    datasets: [{
      data: values,
      backgroundColor: ['#4caf50', '#f44336'],
    }],
  };
  return <Doughnut data={chartData} />;
};

// DeviceVsProjectChart
export const DeviceVsProjectChart = ({ data }) => {
  const labels = Object.keys(data);
  const values = Object.values(data);
  const chartData = {
    labels,
    datasets: [{
      label: 'Devices',
      data: values,
      backgroundColor: '#2196f3',
    }],
  };
  return <Bar data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />;
};

// ObjectHealthChart
export const ObjectHealthChart = ({ data }) => {
  const labels = Object.keys(data).filter(k => k !== 'total');
  const values = labels.map(label => data[label]);
  const chartData = {
    labels,
    datasets: [{
      data: values,
      backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
    }],
  };
  return <Doughnut data={chartData} />;
};

// AlertsPanel
export const AlertsPanel = ({ data }) => (
  <div className="alert-panel">
    <div className="alert-icon">⚠️</div>
    <div className="alert-text">
      <p>Active: {data.active}</p>
      <p>Inactive: {data.inactive}</p>
    </div>
  </div>
);

// ImmobilizeChart
export const ImmobilizeChart = ({ data }) => {
  const labels = Object.keys(data).filter(k => k !== 'total');
  const values = labels.map(label => data[label]);
  const chartData = {
    labels,
    datasets: [{
      data: values,
      backgroundColor: ['#2196f3', '#9e9e9e'],
    }],
  };
  return <Doughnut data={chartData} />;
};

// ImmobilizeStatusChart
export const ImmobilizeStatusChart = ({ data }) => {
  const labels = Object.keys(data);
  const values = Object.values(data);
  const chartData = {
    labels,
    datasets: [{
      label: 'Status',
      data: values,
      backgroundColor: ['#4caf50', '#f44336'],
    }],
  };
  return <Bar data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />;
};

// ObjectGroupChart
export const ObjectGroupChart = ({ data }) => {
  const labels = Object.keys(data).filter(k => k !== 'total');
  const values = labels.map(label => data[label]);
  const chartData = {
    labels,
    datasets: [{
      data: values,
      backgroundColor: ['#009688'],
    }],
  };
  return <Doughnut data={chartData} />;
};

// InactiveDevicesChart
export const InactiveDevicesChart = ({ data }) => {
  const labels = Object.keys(data);
  const values = Object.values(data);
  const chartData = {
    labels,
    datasets: [{
      label: 'Inactive Devices',
      data: values,
      backgroundColor: '#ff9800',
    }],
  };
  return <Bar data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />;
};
