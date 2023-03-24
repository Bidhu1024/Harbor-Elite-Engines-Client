import { Box } from "@mui/material";
import React from "react";
import Logo from "../../Assets/Logo.png";
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const Topbar = () => {
const nav  = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('jwtToken');
    nav('/')
  }
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "space-between", boxShadow:1 }}
    >
      <Box sx={{ display: "flex", gap: "12px", padding: "1rem" }}>
        <Box sx={{ backgroundColor: "white" }}>
          <img src={Logo} alt="aa" width="100" height="50" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontSize="1.4rem" color="white">
            Engine Elites
          </Typography>
        </Box>
      </Box>
      <Box sx={{ padding: "10px" }}>
        <Typography fontSize="1.4rem" color="white" onClick={handleLogout}>
          Logout
        </Typography>
      </Box>
    </Box>
  );
};

export default Topbar;
