import { Box,Typography } from "@mui/material";
import React from "react";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
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
          <Typography sx={{marginRight:'4px'}}>Bikes</Typography> <TwoWheelerIcon  />
        </Box>
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography sx={{marginRight:'4px'}}>Cars</Typography><DirectionsCarIcon />
        </Box>
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography sx={{marginRight:'4px'}}>Electric Vehicles</Typography><ElectricCarIcon />
        </Box>
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography>New Launches</Typography>
        </Box>
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography>Trendings</Typography>
        </Box>
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography>Stats</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Vehicles;
