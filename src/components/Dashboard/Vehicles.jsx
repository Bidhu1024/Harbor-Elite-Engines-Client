import { Box, Typography } from "@mui/material";
import React from "react";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { useNavigate,Link } from 'react-router-dom';
const Vehicles = () => {
  const nav = useNavigate()
  const handleBike =()=>{
    
   nav("/allbikes")
  }
  const handleCar = ()=>{
    nav('/allcars')
      }
      const handleEV = ()=>{
        nav('/allevs')
      }

      const handleNew = ()=>{
        <Link to={{ pathname: "https://www.carwale.com/new-car-launches/" }} target="_blank"/>
      }
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center"}}>
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
        <Box
          sx={{
            height: "8rem",
            width: "33%",
            backgroundColor: "#36454f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleBike}
        >
          <Typography
            sx={{ marginRight: "4px", fontSize: "1.2rem", color: "white" }}
          >
            Bikes
          </Typography>{" "}
          <TwoWheelerIcon sx={{ color: "yellow" }} />
        </Box>
        <Box
          sx={{
            height: "8rem",
            width: "33%",
            backgroundColor: "#36454f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={
  handleCar}
        >
          <Typography
            sx={{ marginRight: "4px", fontSize: "1.2rem", color: "white" }}
          >
            Cars
          </Typography>
          <DirectionsCarIcon sx={{ color: "yellow" }} />
        </Box>
        <Box
          sx={{
            height: "8rem",
            width: "33%",
            backgroundColor: "#36454f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleEV}
        >
          <Typography
            sx={{ marginRight: "4px", fontSize: "1.2rem", color: "white" }}
          >
            Electric Vehicles
          </Typography>
          <ElectricCarIcon sx={{ color: "yellow" }} />
        </Box>

   
        <Box
          sx={{
            height: "8rem",
            width: "33%",
            backgroundColor: "#36454f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
           
          onClick={handleNew}
        >
       <a href="https://www.carwale.com/new-car-launches/">
          <Typography fontSize="1.2rem" color="white" sx={{textDecoration:'none'}}>
          New Launches 2023
            
          </Typography>
          </a>
        </Box>
       
        <Box
          sx={{
            height: "8rem",
            width: "33%",
            backgroundColor: "#36454f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
         <a href="https://www.autocarindia.com/">
          <Typography fontSize="1.2rem" color="white" sx={{textDecoration:'none'}}>
            Trendings
          </Typography>
          </a>
          <TrendingUpIcon sx={{ color: "red" }} />
        </Box>

        <Box
          sx={{
            height: "8rem",
            width: "33%",
            backgroundColor: "#36454f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        <a href="https://www.marklines.com/en/statistics/flash_sales/automotive-sales-in-india-by-month">
          <Typography fontSize="1.2rem" color="white">
            Stats
          </Typography>
          </a>
          <QueryStatsIcon sx={{ color: "red" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Vehicles;
