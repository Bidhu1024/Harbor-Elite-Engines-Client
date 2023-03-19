import { Box, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Users = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Box
        sx={{
          width: "70%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "4rem",
          boxShadow:2,
          padding:'10px'
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography fontSize="3rem" color="whitesmoke">
              Hey USERNAME
            </Typography>
          </Box>
          <Box>
            <Typography fontSize="1rem" color="whitesmoke">
              Welcome to Harbor Elite Engines.
            </Typography>{" "}
          </Box>
        </Box>
        <Box>
          <FavoriteBorderIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Users;
