import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import bidhu from "../../Assets/bidhuimg.png";
const Gudu = () => {
  return (
    <Box sx={{display:'flex', gap:'20px', justifyContent:'center', backgroundColor:'teal'}}>
      <Box >
        <img src={bidhu} alt="bidhu" height="120" width="100" />
      </Box>
      <Box>
        <Typography>
    
          <span style={{ fontWeight: "bold" }}>Name:</span> Bidhubhushan Gahan
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
          bidhu1024av@gmail.com
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Phone:</span> +91 7609074970
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>LinkedIn:</span>
          <a
            href=" https://www.linkedin.com/in/bidhubhushan-gahan-7357a9174/"
            target="_blank"
          >
            {" "}
            Go to LinkedIn
          </a>
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>GitHub:</span>{" "}
          <a href="https://github.com/Bidhu1024">Go to Github</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Gudu;
