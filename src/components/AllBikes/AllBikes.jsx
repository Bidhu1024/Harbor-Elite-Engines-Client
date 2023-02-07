import React from 'react'
import { Stack, Typography, Box } from "@mui/material";
import BikeNavbar from './BikeNavbar';
import BikeDesc from './BikeDesc';
import BikeBrands from './BikeBrands';


const AllBikes = () => {
 
  return (
    <Box>
<BikeNavbar />
<BikeDesc />
<Box sx={{mt:'1.5rem'}}>
  All Categories
</Box>
<BikeBrands/>
    </Box>
  )
}

export default AllBikes