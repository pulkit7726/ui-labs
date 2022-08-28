<<<<<<< HEAD
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { Routes, BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainLayout from "./Layout/MainLayout";
const Users = () => {
  return (
    <div>
      <h2>Users</h2>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <BrowserRouter>
            <CssBaseline />
            <Sidebar />
            {/* <Routes> */}

            {/* <Route path="/users" element={<Users />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} /> */}
            <MainLayout />
          {/* </Routes> */}
        </BrowserRouter>
      </Box>
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> feature/containercard
    </div>
  );
}

export default App;
