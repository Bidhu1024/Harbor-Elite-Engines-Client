import React from 'react'
import BikeMap from './BikeMap';

const Bajaj = () => {
  const bajaj = [
    {
      id: 1,
      name: "Pulsar 150 ",
      image:
        "https://cdn.bajajauto.com/-/media/assets/bajajauto/360degreeimages/bikes/pulsar/pulsar-150/single-disc/black-red/00.png",
      desc: "bike desc",
      price: 193454,
    },
    {
      id: 2,
      name: "Bajaj RS 200",
      image:
        "https://www.drivespark.com/bikes-photos/models/750x550/bajajpulsarrs200_1666956907.jpg/3/x.pagespeed.ic.LUa3d2w5Yg.jpg",
      desc: "classic bike desc",
      price: 213454,
    },
    {
      id: 3,
      name: "Bajaj Dominar 400",
      image:
        "https://bd.gaadicdn.com/processedimages/bajaj/dominar-400-ug/640X309/dominar-400-ug61767d8504389.jpg",
      desc: "classic bike desc",
      price: 213454,
    },
  ];

  return (
   <BikeMap arr={bajaj}/>
  )
}

export default Bajaj