import { Box, Typography } from "@mui/material";
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
          <Typography fontSize="2rem" textAlign="center" color="#0000FF">
            LOGIN
          </Typography>
        </Box>
        <Box sx={{ width: "50%", height: "100%" }}>
          <img src={loginlogo} width="320" height="480" objectFit="cover" />
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
