import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import ashu from "../../Assets/Ashu.jpg";
const Ashu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        backgroundColor: "teal",
      }}
    >
      <Box>
        <img src={ashu} alt="bidhu" height="120" width="100" />
      </Box>
      <Box>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Name:</span> Asutosh Acharya
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
          asutosha109@gmail.com
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Phone:</span> +91 8249079326
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>LinkedIn:</span>
          <a
            href=" https://www.linkedin.com/in/asutosh-acharya-40b591228/"
            target="_blank"
          >
            Go to LinkedIn
          </a>
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>GitHub:</span>{" "}
          <a href="https://github.com/AsutoshAcharya">Go to Github</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Ashu;
