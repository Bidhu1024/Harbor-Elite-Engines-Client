import React from 'react'
import BikeMap from './BikeMap';


const Yamaha = () => {
  const yamaha = [
    {
      id: 1,
      name: "Yamaha R15",
      image:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/103795/r15-right-front-three-quarter-19.png?isig=0",
      desc: "bike desc",
      price: 193454,
    },
    {
      id: 2,
      name: "Yamaha MT 15",
      image:
        "http://cdn.shopify.com/s/files/1/0069/6821/3631/products/Ice_600x.png?v=1648733412",
        desc:'mt15',
      price: 213454,
    },
    {
      id: 3,
      name: "Yamaha RX 100",
      image:
        "https://bd.gaadicdn.com/processedimages/yamaha/yamaha-rx-100/640X309/v_rx-100-std1561366088.jpg",
      desc: "rx100 bike desc",
      price: 213454,
    },
  ];
  return (
    <BikeMap arr = {yamaha} />
  )
}

export default Yamaha