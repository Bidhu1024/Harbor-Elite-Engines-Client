import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ev from "../../Assets/ola.jpg";
const EVBox = () => {
  return (
    <Stack>
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
