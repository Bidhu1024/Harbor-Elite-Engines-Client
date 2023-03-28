import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import loginlogo from "../Assets/super-bike-like-kawasaki.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "react-query";

const SignIn = () => {
  const nav = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    nav("/register");
  };
  const handleSignIn = async (e) => {
    e.preventDefault();

    const payload = {
      username,
      password,
    };

    try {
      await axios
        .post("/auth/login", payload, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          nav("/dashboard");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, onSuccess, status } = useMutation(
    "signin",
    handleSignIn
  );

  if (data) {
    console.log(data);
  }
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
          borderRadius: "10px",
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
            fontFamily="Poppins"
          >
            LOGIN
          </Typography>

          <form action="">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontSize="1.2rem" color="gray">
                Email
              </Typography>
              <TextField
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                size="small"
                sx={{ width: "24rem", marginTop: ".6rem" }}
              />
              <Typography
                fontSize="1.2rem"
                color="gray"
                sx={{ marginTop: ".6rem" }}
              >
                Password
              </Typography>
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="small"
                type="password"
                sx={{ width: "24rem", marginTop: ".6rem" }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleSignIn}
                  sx={{
                    backgroundColor: "#ad23db",

                    width: "12rem",

                    "&:hover": {
                      backgroundColor: "#4f0269",
                      boxShadow: "none",
                      color: "white",
                    },
                  }}
                >
                  SignIn
                </Button>
              </Box>
              <Typography
                sx={{
                  marginTop: "1rem",
                  alignContent: "center",
                  marginLeft: "8rem",
                }}
              >
                Didn't Registered yet?
                <span
                  onClick={handleRegister}
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  SignUp
                </span>
              </Typography>
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
