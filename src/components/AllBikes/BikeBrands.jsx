import { Box, Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { Circles } from "react-loader-spinner";
import { useQuery } from "react-query";
const BikeBrands = () => {
  const getBrands = async () => {
    const res = await axios.get("/allbikes");
    return res.data;
  };
  // Using the hook
  const { data, error, isLoading } = useQuery("bike-brands", getBrands);

  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }

  if (isLoading) {
    return (
      <Circles
        height="150"
        width="100%"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperclassName=""
        visible={true}
      />
    );
  }

  // const nav = useNavigate()
  // const handleBike =(id)=>{
  // nav(`/allbikes/${id}`)
  // }
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        gap: "20",
        padding: "2px",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {data.map((bike) => {
        return (
          <Box>
            <img
              src={bike.image}
              alt="Avatar"
              style={{ height: "17rem", width: "17rem" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
         
                <h4>
                  <b>{bike.brand}</b>
                </h4>
              </Box>
          
          </Box>
        );
      })}
    </Box>
  );
};

export default BikeBrands;
