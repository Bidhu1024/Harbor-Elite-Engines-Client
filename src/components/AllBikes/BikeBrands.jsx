import { Box, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom';


const BikeBrands = () => {
  const AllBike = [
    {
      id: 1,
      name: "Royal Enfield",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEvpE32OzpugPbkDd1QE7Je4OM0-mNMeemBY7lGto&s",
      origin: "India",
    },
    {
      id: 2,
      name: "Yamaha",
      image:
        "https://logos-world.net/wp-content/uploads/2020/10/Yamaha-Logo.png",
      origin: "Japan",
    },
    {
      id: 3,
      name: "TVS",
      image: "https://m.media-amazon.com/images/I/71MyxHA8moL._SL1500_.jpg",
      origin: "India",
    },
    {
      id: 4,
      name: "Suzuki",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suzuki_logo_2.svg/2560px-Suzuki_logo_2.svg.png",
      origin: "India",
    },
    {
      id: 5,
      name: "Honda",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/2552px-Honda_Logo.svg.png",
      origin: "India",
    },
    {
      id: 6,
      name: "BMW",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxRhW9cUG0nwf6iCNKhaVvBzd6G4nQaXsdnJRpsR-3w&s",
      origin: "India",
    },
    {
      id: 7,
      name: "Bajaj",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bajaj_Auto_Ltd_logo.svg/1200px-Bajaj_Auto_Ltd_logo.svg.png",
      origin: "India",
    },
    {
      id: 8,
      name: "KTM",
      image:
        "https://thumbs.dreamstime.com/b/logo-ktm-logo-ktm-bike-color-vector-format-aviable-ai-132135826.jpg",
      origin: "India",
    },
  ];
const nav = useNavigate()
const handleBike =(id)=>{
nav(`/allbikes/${id}`)
}
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        RowGap: "10px",
        columnGap: "10px",
        padding: "2px",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {AllBike.map((bike, index) => {
        return (
          <Box
            component="img"
            src={bike.image}
            key={bike.id}
            sx={{
              cursor: "pointer",
              height: "10rem",
              marginTop:'.6rem',
              width: "20%",
              "&:hover":{
                transform:'scaleY(1.1)'
              }
            }}

            onClick={()=>{handleBike(bike.id)}}
          ></Box>
        );
      })}
    </Box>
  );
};

export default BikeBrands;
