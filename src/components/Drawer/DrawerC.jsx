import React from 'react'
import {Drawer,Box,Typography} from '@mui/material';
import { useState } from 'react';
import Menu from '@mui/icons-material/Menu';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

const DrawerC = () => {
  const [isOpen,setIsOpen] = useState(false)

  const Admins = [
    {
      id:1,
      name:"Bike Admin",
      icon:'<TwoWheelerIcon/>',
    },
    {
      id:2,
      name:"Car Admin",
      icon:'<TwoWheelerIcon/>',
    },
    {
      id:3,
      name:"EVs Admin",
      icon:'<TwoWheelerIcon/>',
    },
  ]
  return (
    <>
    <Menu onClick={()=>setIsOpen(true)} />
    <Drawer anchor='right' open={isOpen} onClose={()=>setIsOpen(false)}>
    <Box p={2} width="250px" textAlign="center" role="presentation" sx={{backgroundColor:'teal', height:'100%'}}>
    <Box>
    {Admins.map((vehicle, id)=>{
      return(
      <Box key={id}>
        {vehicle.name}
      </Box>
      )
    })}
    </Box>
    </Box>
    </Drawer>
    </>
  )
}

export default DrawerC;