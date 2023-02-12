import React from 'react'
import BikeMap from './BikeMap';

const Honda = () => {
  const honda = [
    {
      id: 1,
      name: "Honda Unicorn",
      image:
        "https://www.drivespark.com/bikes-photos/models/750x550/hondaunicorn_1666954916.jpg/3/x.pagespeed.ic.GpTPQ3mWrf.jpg",
      desc: "bike desc",
      price: 193454,
    },
    {
      id: 2,
      name: "Honda CBR",
      image:
        "https://imgd.aeplcdn.com/360x202/bw/models/honda-cbr-250r.jpg?20190103151915&q=75",
      desc: "classic bike desc",
      price: 213454,
    },
    {
      id: 3,
      name: "Honda Activa",
      image:
        "https://bd.gaadicdn.com/processedimages/honda/activa-6g/640X309/activa-6g63ce6a450dd74.jpg",
      desc: "classic bike desc",
      price: 213454,
    },
  ];
  return (
<BikeMap arr = {honda} />
  )
}

export default Honda