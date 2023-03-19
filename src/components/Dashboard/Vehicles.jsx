import { Box,Typography } from "@mui/material";
import React from "react";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
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
          <Typography sx={{marginRight:'4px', fontSize:'1.2rem', color:'white'}}>Bikes</Typography> <TwoWheelerIcon sx={{color:'yellow'}} />
        </Box>
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography sx={{marginRight:'4px', fontSize:'1.2rem', color:'white'}}>Cars</Typography><DirectionsCarIcon sx={{color:'yellow'}} />
        </Box>
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography sx={{marginRight:'4px', fontSize:'1.2rem', color:'white'}}>Electric Vehicles</Typography><ElectricCarIcon sx={{color:'yellow'}} />
        </Box>
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography fontSize="1.2rem" color="white" >New Launches 2023</Typography>
        </Box>
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography fontSize="1.2rem" color="white">Trendings</Typography><TrendingUpIcon sx={{color:'yellow'}} />
        </Box>
        <Box sx={{ height: "8rem", width: "33%", backgroundColor: "#36454f", display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography fontSize="1.2rem" color="white">Stats</Typography><QueryStatsIcon sx={{color:'yellow'}}  />
        </Box>
      </Box>
    </Box>
  );
};

export default Vehicles;
