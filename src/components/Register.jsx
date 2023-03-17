import { Box, Typography, Button, TextField } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#edddc5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "60rem",
          height: "30rem",
          border: "1px solid white",
          borderRadius: "10px",
          display: "flex",
          boxShadow: 3,
        }}
      >
        <Box sx={{ width: "50%", height: "100%", backgroundColor: "#3e18ba" }}>
          <Typography
            fontSize="2rem"
            fontWeight="bold"
            color="white"
            textAlign="center"
            sx={{ marginTop: "1rem" }}
          >
            INFORMATION
          </Typography>
          <Typography
            sx={{ padding: "10px", color: "white", fontSize: "1.2rem" }}
          >
            This website contains information about different bikes,cars and Evs
            of multiple brands in India. You will have a brief idea about the
            vehicles out there. Here you can register yourself and login to see
            the contents.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <span
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.2rem",
                color: "white",
              }}
            >
              Already Registered?
            </span>{" "}
            <Button
              variant="outlined"
              sx={{
                marginLeft: "10px",
                backgroundColor: "white",
                textAlign: "center",
                padding: "6px 25px",
                color: "black",
                boxShadow: 2,
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: "50%", height: "100%", backgroundColor: "white" }}>
          <form action="POST">
            <Box
              sx={{ padding: "10px", display: "flex", flexDirection: "column" }}
            >
              <Typography
                sx={{
                  color: "#0528f2",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                REGISTRATION
              </Typography>
              <Typography
                sx={{ marginTop: ".6rem", color: "black", fontSize: "1rem" }}
              >
                Your Name
              </Typography>
              <TextField size="small" sx={{ width: "25rem" }} />
              <Typography
                sx={{ marginTop: ".6rem", color: "black", fontSize: "1rem" }}
              >
                Email
              </Typography>
              <TextField size="small" sx={{ width: "25rem" }} />
              <Typography
                sx={{ marginTop: ".6rem", color: "black", fontSize: "1rem" }}
              >
                Password
              </Typography>
              <TextField size="small" sx={{ width: "25rem" }} />
              <Button
                variant="contained"
                type="password"
                sx={{ marginTop: "2rem", width: "10rem", marginLeft: "1.5rem" }}
              >
                Register
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
