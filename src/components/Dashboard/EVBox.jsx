import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ev from "../../Assets/ola.jpg";
import { useNavigate } from 'react-router-dom';

const EVBox = () => {
  const nav = useNavigate()
  const handleEV = ()=>{
    nav('/allevs')
  }
  return (
    <Stack onClick={handleEV}>
      <Box
        style={{
          backgroundImage: `url(${ev})`,
          backgroundRepeat: "no-repeat",
          objectFit: "contain",
          width: "100%",
          height: "20rem",
        }}
      >
        <Typography>Evs</Typography>
      </Box>
    </Stack>
  );
};

export default EVBox;
