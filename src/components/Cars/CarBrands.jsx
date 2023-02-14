import React from 'react'
import {Box} from '@mui/material'
import { Circles } from "react-loader-spinner";
import { useQuery } from "react-query";
import axios from "axios";
import { Typography } from '@mui/material';
const CarBrands = () => {

  const getCarBrands = async ()=>{
    const res =await axios.get('/allcars')
    return res.data
    // console.log(res);
   
  }

  const {data, error,isLoading} = useQuery('car-brands',getCarBrands )
// console.log(data)
if(data!==null){
  console.log(data);
}
// console.log(error);
  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex", gap:'1rem',flexWrap:'wrap',justifyContent:'space-between',padding:'10px' }}>
      {data &&
        data.map((car) => {
          return (
          <Box sx={{display:'flex', flexDirection:'column', border:'1px solid black',boxShadow: 3, borderRadius:'5px' }}>
          <Box component='img' src = {car.image} sx={{width:'20rem', height:'10rem'}}/>
          <Typography sx={{fontSize:'1rem', color:'blue', fontWeight:'600', display:'flex', justifyContent:'center'}}>{car.brand}</Typography>

          </Box>
          )
        })}
    </Box>
  );
}

export default CarBrands