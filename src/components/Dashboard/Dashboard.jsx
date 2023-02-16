import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import Logo from "../../Assets/Logo.png";
import bgimg from "../../Assets/bgimg.jpg";
import UpperRightBoxVideo from "./UpperRightBoxVideo";
import BikeBox from "./BikeBox";
import CarBox from "./CarBox";
import EVBox from "./EVBox";
import Recommendations from "./Recommendations";
import Footer from "./Footer";
const Dashboard = () => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "99%",

          height: "15rem",
          marginTop: "1rem",
          display: "flex",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            width: "47%",

            height: "15rem",
            backgroundImage: { bgimg },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ height: "4rem", width: "8rem" }}
            />
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginTop: "1.2rem",
              }}
            >
              Elite Engines
            </Typography>
          </Box>

          <Box sx={{ marginTop: ".6rem", marginLeft: "1rem" }}>
            <Typography sx={{ fontSize: "1.25rem", fontWeight: "bolder" }}>
              About Harbor
            </Typography>
            <Typography>
              Harbor is an fictional character from Valorant and a fierce
              Warrior. As his name suggest our Website which includes
              information about Bikes and Cars and accurate and fair.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "47%",

            height: "15rem",
            marginLeft: "4rem",
          }}
        >
          <UpperRightBoxVideo />
        </Box>
      </Box>

      <Box
        sx={{
          height: "20rem",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: ".4rem",
        }}
      >
        <Box
          sx={{
            width: "30%",
            backgroundColor: "rgba(238,238,228, 0.9)",
            padding: ".5rem",
          }}
        >
          <BikeBox />
        </Box>
        <Box sx={{ width: "30%" }}>
          <CarBox />
        </Box>
        <Box sx={{ width: "30%" }}>
          <EVBox />
        </Box>
      </Box>

      <Box>
        Recommendations
        <Recommendations />
      </Box>
      <Box>
      {/* <Typography
          sx={{ fontSize: "1.2rem", color: "blue", fontWeight: "bold", marginLeft:'3rem'}}
        >
          Creators
        </Typography>
        <Footer>
      
        </Footer> */}
      </Box>
    </Stack>
  );
};

export default Dashboard;
