import { Box } from "@mui/material";
import React from 'react';
import BikeBrands from './BikeBrands';
import BikeDesc from './BikeDesc';
import BikeNavbar from './BikeNavbar';


const AllBikes = () => {
 
  return (
    <Box sx={{width:'100%', backgroundColor:'#ede2c5'}}>
<BikeNavbar />
<BikeDesc />
<Box sx={{mt:'1.5rem', fontSize:'1.5rem', fontWeight:'700' }}>
  All Categories
</Box>
<BikeBrands/>
    </Box>
  )
}

export default AllBikes