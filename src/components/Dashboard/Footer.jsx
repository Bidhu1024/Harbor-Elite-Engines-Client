import React from "react";
import { Box } from "@mui/material";
import Gudu from "./../ProjectCreaterProfiles/Gudu";
import Ashu from "./../ProjectCreaterProfiles/Ashu";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1rem",
      }}
    >
      <Box sx={{ width: "50%" }}>
 
        <Gudu />
      </Box>
      <Box sx={{ width: "50%" }}>
        <Ashu />
      </Box>
    </Box>
  );
};

export default Footer;
