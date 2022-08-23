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
    </div>
  );
}

export default App;
