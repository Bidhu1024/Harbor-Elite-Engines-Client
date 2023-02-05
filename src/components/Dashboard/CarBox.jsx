import React from "react";
import { Box,Stack,Typography } from "@mui/material";
import car from '../../Assets/mustang1.jpg'
const CarBox = () => {
  return (
<Stack>
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