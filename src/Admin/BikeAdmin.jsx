import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const BikeAdmin = () => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Typography sx={{backgroundColor:'orange', color:'white', display:'flex', justifyContent:'center', fontFamily:'bolder', fontSize:'1.3rem'}}>Welcome to Bike Admin Panel</Typography>
      <Box sx={{ display:'flex', justifyContent:'center', backgroundColor:'#b9e8ed'}}>
        <form action="" method="post" autoComplete="off">
        <Box sx={{display:'flex', flexDirection:'column', gap:'1rem'}}>
          <Box sx={{display:'flex', alignItems:'center',gap:'1.2rem'}}>
            <Typography fontSize='1.2rem'>Enter the Name of the Bike</Typography>
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </Box>
          <Box sx={{display:'flex', alignItems:'center',gap:'1.2rem'}}>
            <Typography fontSize='1.2rem'>Upload the images of the Bike</Typography>
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </Box>
          <Box sx={{display:'flex', alignItems:'center',gap:'1.2rem'}}>
            <Typography fontSize='1.2rem'>Enter the Price of the Bike</Typography>
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </Box>
          <Box sx={{display:'flex', alignItems:'center',gap:'1.2rem'}}>
            <Typography fontSize='1.2rem'>Enter the Engine of the Bike</Typography>
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </Box>
          <Box sx={{display:'flex', alignItems:'center',gap:'1.2rem'}}>
            <Typography fontSize='1.2rem'>Enter the Weight of the Bike</Typography>
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </Box>
          <Box sx={{display:'flex', alignItems:'center',gap:'1.2rem'}}>
            <Typography fontSize='1.2rem'>Enter the Max Power of the Bike</Typography>
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </Box>
          <Box sx={{display:'flex', alignItems:'center',gap:'1.2rem'}}>
            <Typography fontSize='1.2rem'>Enter the no of gears of the Bike</Typography>
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </Box>
          <Box sx={{display:'flex', alignItems:'center',gap:'1.2rem'}}>
            <Typography fontSize='1.2rem'>Enter the ABS of the Bike</Typography>
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </Box>
          <Box sx={{display:'flex', alignItems:'center',gap:'1.2rem'}}>
            <Typography fontSize='1.2rem'>Enter the Top Speed of the Bike</Typography>
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </Box>
          <Box sx={{display:'flex', alignItems:'center',gap:'1.2rem'}}>
            <Typography fontSize='1.2rem'>Enter the Fuel Capacity of the Bike</Typography>
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default BikeAdmin;
