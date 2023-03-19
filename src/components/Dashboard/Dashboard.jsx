import { Stack } from "@mui/material";
import React from "react";
import Topbar from "./Topbar";
import Users from "./Users";
import Vehicles from "./Vehicles";
const Dashboard = () => {
  
  return (
    
    <Stack sx={{ width: "100vw", height:'100vh', backgroundColor:'#28282B' }}>
    <Topbar/>
    <Users/>
    <Vehicles />
    </Stack>
      );
};

export default Dashboard;
