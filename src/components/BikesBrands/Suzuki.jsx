import React from 'react'
import BikeMap from './BikeMap';

const Suzuki = () => {
  const suzuki = [
    {
      id: 1,
      name: "Gixxer 150",
      image:
        "https://www.tesla24.in/wp-content/uploads/2023/01/overview_image_3_4.jpg",
      desc: "bike desc",
      price: 193454,
    },
    {
      id: 2,
      name: "Burgman Street",
      image:
        "https://imgd.aeplcdn.com/1280x720/bw/models/suzuki-burgman-street-125-bs-vi20200217114022.jpg",
      desc: "classic bike desc",
      price: 213454,
    },
    {
      id: 3,
      name: "Suzuki Access",
      image:
        "https://cdn.suzukimotorcycle.co.in/public-live/uploads/product-gallery-images/original/30/Access%20Digital_520x420px-13.jpg",
      desc: "classic bike desc",
      price: 213454,
    },
  ];
  return (
   <BikeMap arr = {suzuki} />
  )
}

export default Suzuki