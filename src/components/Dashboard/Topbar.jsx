import { Box } from "@mui/material";
import React from "react";
import Logo from "../../Assets/Logo.png";
import { Typography } from "@mui/material";
const Topbar = () => {
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
        <Typography fontSize="1.4rem" color="white">
          Admin
        </Typography>
      </Box>
    </Box>
  );
};

export default Topbar;
