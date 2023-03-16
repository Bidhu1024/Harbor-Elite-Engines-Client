import { Box } from '@mui/material'
import React from 'react'

const SignIn = () => {
  return (
    <Box sx={{height:'100vh', width:'100vw', backgroundColor:'#eab5eb', display:'flex', justifyContent:'center', alignItems:'center', opacity:'.7'}}>
    <Box sx={{display:'flex',border:'1px solid black', width:'35rem', height:'30rem'}}>
    <Box sx={{width:'50%', height:'100%'}}>form</Box>
    <Box sx={{width:'50%', height:'100%'}}>image</Box>
    </Box>
    </Box>
  )
}

export default SignIn;