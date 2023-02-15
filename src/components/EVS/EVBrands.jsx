import { Box,Typography } from '@mui/material'
import React from 'react'
import  axios  from 'axios';
import { useQuery } from 'react-query';

const EVBrands = () => {
    const evbrands = async ()=>{
      const res = await axios.get('/allevs')
      return res.data
    }
    
    const {data,error,isLoading} = useQuery('ev-brand', evbrands)
    if(data!==null){
      console.log(data)
    }
  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex", gap:'1rem',flexWrap:'wrap',justifyContent:'space-between',padding:'10px' }}>
      {data &&
        data.map((ev) => {
          return (
          <Box sx={{display:'flex', flexDirection:'column', border:'1px solid black',boxShadow: 3, borderRadius:'5px' }}>
          <Box component='img' src = {ev.image} sx={{width:'20rem', height:'10rem'}}/>
          <Typography sx={{fontSize:'1rem', color:'blue', fontWeight:'600', display:'flex', justifyContent:'center'}}>{ev.brand}</Typography>

          </Box>
          )
        })}
    </Box>
  )
}

export default EVBrands