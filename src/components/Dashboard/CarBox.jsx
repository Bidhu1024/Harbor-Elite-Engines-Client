import React from "react";
import { Box,Stack,Typography } from "@mui/material";
import car from '../../Assets/mustang1.jpg'
import { useNavigate } from 'react-router-dom';
const CarBox = () => {
  const nav = useNavigate()
  const handleCar = ()=>{
nav('/allcars')
  }
  return (
<Stack onClick={
  handleCar}>
<Box
      style={{
        backgroundImage: `url(${car})`,
        backgroundRepeat: 'no-repeat',
        objectFit:'contain',
         width:'100%' , 
         height:'20rem'
      }}
    >
<Typography>
Cars
</Typography>
    </Box>
</Stack>
  );
};

export default CarBox;