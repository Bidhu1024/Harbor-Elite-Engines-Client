import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";

const BikeNavbar = () => {
  return (
    <Box
      sx={{
        height: "3rem",
        width: "100",
        border: "1px solid black",
        backgroundColor: "#1c1370",
        display: "flex",
        alignItems: "center",
        justifyContent:'space-between',
        padding:'.6rem'
      }}
    >
      <Box sx={{}}>
        <Typography
          sx={{ color: "#fff", fontWeight: "bold", fontFamily: "sans-serif" }}
        >
          Harbor
        </Typography>
      </Box>
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'.8rem',color: "#fff", fontWeight: "bold", fontFamily: "sans-serif"}}>
        <Box>
          <Typography>MENU</Typography>
        </Box>{" "}
        <Box>
          <Typography>CONTACT</Typography>
        </Box>{" "}
        <Box>
          <Typography>ABOUT</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BikeNavbar;
