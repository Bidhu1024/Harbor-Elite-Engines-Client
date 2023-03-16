import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import loginlogo from "../Assets/super-bike-like-kawasaki.jpg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          borderRadius:'10px'
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            backgroundColor: "white",
            padding: "5px",
          }}
        >
          <Typography
            fontSize="1.8rem"
            textAlign="center"
            color="#0000FF"
            fontWeight="bold"
          >
            LOGIN
          </Typography>

          <form action="">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontSize="1.2rem" color="gray">
                Email
              </Typography>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="small"
                sx={{width:'24rem'}}
              />
              <Typography fontSize="1.2rem" color="gray">
                Password
              </Typography>
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="small"
                sx={{width:'24rem'}}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ad23db",
                  marginTop: "2rem",
                  width: "12rem",
                  marginLeft: "10rem",
                  "&:hover": {
                    backgroundColor: "#4f0269",
                    boxShadow: "none",
                    color: "white",
                  },
                }}
              >
                SignIn
              </Button>
              <Typography>Didn't Registered yet? SignUp</Typography>
            </Box>
          </form>
        </Box>
        <Box sx={{ width: "50%", height: "100%" }}>
          <img
            src={loginlogo}
            width="480"
            height="490"
            objectFit="cover"
            alt="jj"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
