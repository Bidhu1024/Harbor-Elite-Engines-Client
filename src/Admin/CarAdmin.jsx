import React from 'react'
import {Box} from '@mui/material'
import { TextField } from '@mui/material';
const CarAdmin = () => {
  return (
    <Box sx={{display:'flex',flexDirection:"column", alignItems:'space-between'}}>
      <TextField size='small' label="Brand Name"/>
      <TextField size='small' label="Car Name"/>
      <TextField size='small' label="Brand Name"/>
      <TextField size='small' label="Brand Name"/>
      <TextField size='small' label="Brand Name"/>
    </Box>
  )
}

export default CarAdmin