import { Box, Stack } from "@mui/material";
import React from "react";

const BikeBrands = () => {
  const AllBike = [
    {
      id: 1,
      name: "Royal Enfield",
      image:
        "https://www.google.com/url?sa=i&url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTG0k2DdZwPjNtr6Bl-IdUFNY79Ce7eGvwz7FKe8ZoO5EuyaIwv&psig=AOvVaw1MbGtt3yHbWcRX4OUr1wE-&ust=1675787169653000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJD5_e6ngf0CFQAAAAAdAAAAABAH",
      origin: "India",
    },
    {
      id: 2,
      name: "Yamaha",
      image:
        "https://logos-world.net/yamaha-https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fdjcheo1708%2Fyamaha-logo%2F&psig=AOvVaw3uPWPVL0_6yb_FEg-B-eDL&ust=1675787247235000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLCIvpOogf0CFQAAAAAdAAAAABAJ/",
      origin: "Japan",
    },
    {
      id: 3,
      name: "TVS",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2F1000logos.net%2Ftvs-motor-logo%2F&psig=AOvVaw2E3Vab-BeOd4ePdn6W6D9P&ust=1675787372569000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJjIns-ogf0CFQAAAAAdAAAAABAE",
      origin: "India",
    },
    {
      id: 4,
      name: "Suzuki",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ASuzuki_logo_2.svg&psig=AOvVaw2HGfRDh7_5nWLagP3-iZwH&ust=1675787411832000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJiM-eGogf0CFQAAAAAdAAAAABAE",
      origin: "India",
    },
    {
      id: 5,
      name: "Honda",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AHonda_Logo.svg&psig=AOvVaw2DwIlld7gFN1yluE4qSRJY&ust=1675787323561000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIj2jbmogf0CFQAAAAAdAAAAABAL",
      origin: "India",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
        boxShadow: "0px 0px 8px rgba(0,0,0,0.5)",
      }}
    >
      {AllBike.map((bike) => {
        return (
          <Stack sx={{ cursor: "pointer", padding: "10px", gap: "10px" }}>
            <Box component="img" src={bike.image}></Box>
          </Stack>
        );
      })}
    </Box>
  );
};

export default BikeBrands;
