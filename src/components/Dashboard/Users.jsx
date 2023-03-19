import { Box,Typography } from "@mui/material";
import React from "react";

const Users = () => {
  return (
   <Box sx={{display:'flex', justifyContent:'center',width:'100%',}}>
     <Box sx={{width:'60%',display:'flex', justifyContent:'space-between',alignItems:'center', marginTop:'6rem'}}>
      <Box sx={{display:'flex', flexDirection:'column'}}>
        <Box><Typography fontSize="3rem" color='whitesmoke'>USERNAME</Typography></Box>
        <Box>Welcome </Box>
      </Box>
      <Box>Favs section</Box>
    </Box>
   </Box>
  );
};

export default Users;
