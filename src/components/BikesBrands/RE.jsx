import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import BikeMap from './BikeMap';
const RE = () => {
  const royalEnfield = [
    {
      id: 1,
      name: "Hunter",
      image:
        "https://imgd.aeplcdn.com/393x221/n/cw/ec/1/versions/royalenfield-hunter-350-retro-factory1671523605320.jpg?q=75",
      desc: "bike desc",
      price: 193454,
    },
    {
      id: 2,
      name: "Classic 350",
      image:
        "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/classic-350/colors/studio-shots/dual-channel/dark-gunmetal-grey/01-gunmetal-grey.png",
      desc: "classic bike desc",
      price: 213454,
    },
    {
      id: 3,
      name: "Continental GT 650",
      image:
        "https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/continental-gt/colours/studio-shots/new/mr-clean/rear-view.png",
      desc: "classic bike desc",
      price: 213454,
    },
  ];

  return(
    <BikeMap arr = {royalEnfield} />
  )

  
};

export default RE;
