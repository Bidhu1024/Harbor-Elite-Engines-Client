import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import Logo from "../../Assets/Logo.png";

const Dashboard = () => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "99%",
          border: "1px solid black",
          height: "15rem",
          marginTop: "1rem",
          display: "flex",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            width: "47%",
            border: "1px solid black",
            height: "15rem",
            display: "flex",
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "4rem", width: "8rem" }}
          />
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "1.2rem" }}
          >
            Elite Engines
          </Typography>
        </Box>

        <Box
          sx={{
            width: "47%",
            border: "1px solid black",
            height: "15rem",
            marginLeft: "4rem",
          }}
        ></Box>
      </Box>
    </Stack>
  );
};

export default Dashboard;
