import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
import loginlogo from "../Assets/super-bike-like-kawasaki.jpg";

const SignIn = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f7d7f7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
   
      }}
    >
      <Box
        sx={{
          display: "flex",
          border: "1px solid peach",
          width: "60rem",
          height: "30rem",
          boxShadow: 3,
         
        }}
      >
        <Box sx={{ width: "50%", height: "100%", backgroundColor: "white", padding:'5px' }}>
          <Typography
            fontSize="1.8rem"
            textAlign="center"
            color="#0000FF"
            fontWeight="bold"
          >
            LOGIN
          </Typography>
          
            <form action="">
            <Box sx={{display:'flex', flexDirection:'column'}}>
              <Typography fontSize="1.2rem" color='gray'>Email</Typography>
              <TextField></TextField>
              <Typography fontSize="1.2rem" color='gray'>Password</Typography>
              <TextField></TextField>
              <Button>SignIn</Button>
              <Typography>Didn't SignedUp yet? SignUp</Typography>
              </Box>
            </form>
          
        </Box>
        <Box sx={{ width: "50%", height: "100%" }}>
          <img src={loginlogo} width="480" height="480" objectFit="cover" alt="jj"/>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
