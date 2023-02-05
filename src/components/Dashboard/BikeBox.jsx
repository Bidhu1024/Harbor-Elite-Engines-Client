import React from "react";
import { Box,Stack,Typography } from "@mui/material";
import bike1 from '../../Assets/bikeimg1.jpeg'
const BikeBox = () => {
  return (
<Stack>
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
