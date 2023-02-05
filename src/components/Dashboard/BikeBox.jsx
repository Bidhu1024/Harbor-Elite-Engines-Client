import React from "react";
import { Box,Stack,Typography } from "@mui/material";
import bike1 from '../../Assets/bikeimg1.jpeg'
import { useNavigate } from 'react-router-dom';

const BikeBox = () => {
  const nav = useNavigate()
  const handleBike =()=>{
    
   nav("/allbikes")
  }
  return (
<Stack onClick={handleBike}>
<Box
      style={{
        backgroundImage: `url(${bike1})`,
        backgroundRepeat: 'no-repeat',
        objectFit:'cover',
         width:'100%' , 
         height:'20rem'
      }}
    >
<Typography>
    Bikes
</Typography>
    </Box>
</Stack>
  );
};

export default BikeBox;
