import { Box,Typography } from "@mui/material";
import React from "react";

const Vehicles = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "80%",
          padding: "10px",
          gap: "5px",
          boxShadow: 2,
        }}
      >
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography>BikeBox</Typography>
        </Box>
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography>BikeBox</Typography>
        </Box>
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography>BikeBox</Typography>
        </Box>
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography>BikeBox</Typography>
        </Box>
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography>BikeBox</Typography>
        </Box>
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography>BikeBox</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Vehicles;
