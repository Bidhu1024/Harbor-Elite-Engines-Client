import React from "react";
import { Drawer, Box, Typography } from "@mui/material";
import { useState } from "react";
import Menu from "@mui/icons-material/Menu";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import bike from '../../Assets/pngs/bike.png'
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import { useNavigate } from "react-router-dom";

const DrawerC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Admins = [
    {
      id: 1,
      name: "Bike Admin",
      icon: <TwoWheelerIcon/>,
    },
    {
      id: 2,
      name: "Car Admin",
      icon: <AirportShuttleIcon/>,
    },
    {
      id: 3,
      name: "EVs Admin",
      icon: <ElectricBikeIcon/>,
    },
  ];
const nav = useNavigate()
  const handleAdmin = ()=>{
nav('/')
  }
  return (
    <>
      <Menu onClick={() => setIsOpen(true)} />
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box
          p={2}
          width="250px"
          textAlign="center"
          role="presentation"
          sx={{ backgroundColor: "teal", height: "100%", display:'flex', flexDirection:'column', gap:'1rem' }}
        >
        <Typography fontFamily='roboto' fontWeight='500' color='white' fontSize='1rem'>Admin Panel</Typography>
          {Admins.map((vehicle, id) => {
            return  ( 
             <Box key={vehicle.id} sx={{boxShadow:2,display:'flex', backgroundColor:'white',padding:'.4rem', justifyContent:'center', gap:'4px', borderRadius:'6px', cursor:'pointer' }} onClick={handleAdmins}>
             {vehicle.icon}
              <Typography>{vehicle.name}</Typography>
            </Box>
            )
          })}
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerC;
