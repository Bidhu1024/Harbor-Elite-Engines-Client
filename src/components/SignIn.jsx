import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
import loginlogo from "../Assets/logologin.jpeg";

const SignIn = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#eab5eb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: ".7",
      }}
    >
      <Box
        sx={{
          display: "flex",
          border: "1px solid black",
          width: "40rem",
          height: "30rem",
          boxShadow: 3,
        }}
      >
        <Box sx={{ width: "50%", height: "100%", backgroundColor: "white" }}>
          <Typography
            fontSize="1.8rem"
            textAlign="center"
            color="#0000FF"
            fontWeight="bold"
          >
            LOGIN
          </Typography>
          <Box>
            <form action="">
              <Typography>UserName</Typography>
              <TextField></TextField>
              <Typography>UserName</Typography>
              <TextField></TextField>
              <Button>SignIn</Button>
              <Typography>Didn't SignedUp yet? SignUp</Typography>
            </form>
          </Box>
        </Box>
        <Box sx={{ width: "50%", height: "100%" }}>
          <img src={loginlogo} width="320" height="480" objectFit="cover" />
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
