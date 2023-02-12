import React from 'react'
import BikeMap from './BikeMap';

const TVS = () => {
  const tvs = [
    {
      id: 1,
      name: "TVS Apache 160",
      image:
      "https://static.autox.com/uploads/2022/09/TVS-Apache-RTR-160-T-Grey.jpg",
      desc: "bike desc",
      price: 193454,
    },
    {
      id: 2,
      name: "TVS Raider",
      image:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/103183/raider-125-right-front-three-quarter-3.jpeg?isig=0",
      desc: "bike desc",
      price: 213454,
    },
    {
      id: 3,
      name: "TVS Jupiter",
      image:
        "https://www.bikes4sale.in/pictures/default/tvs-jupiter-zx-bs6/tvs-jupiter-zx-bs6-640.jpg",
      desc: "scooty",
      price: 213454,
    },
  ];
  return (
<BikeMap arr = {tvs}/>
  )
}

export default TVS