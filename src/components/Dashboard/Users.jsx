import { Box } from "@mui/material";
import React from "react";

const Users = () => {
  return (
    <Box sx={{width:'100%',display:'flex', justifyContent:'space-between', marginTop:'6rem'}}>
      <Box sx={{display:'flex', flexDirection:'column'}}>
        <Box>Username</Box>
        <Box>Welcome </Box>
      </Box>
      <Box>Favs section</Box>
    </Box>
  );
};

export default Users;
