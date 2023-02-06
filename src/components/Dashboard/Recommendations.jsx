import React from "react";
import { Stack, Typography, Box } from "@mui/material";

const Recommendations = () => {
  const constant = [
    {
      id: 1,
      data: "MT 15",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIV-MhvqYmgn34MoOw7l9P0tRRETlQwSjyag&usqp=CAU",
    },
    {
      id: 2,
      data: "Hunter 350",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4RkDyiyKyT6wE0X_plnxfi_w_OyYx7AAfg&usqp=CAU",
    },
    {
      id: 3,
      data: "Porsche 911",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgHfNQwFU_u68A1kRMPEBA8-3jRlyNXMzww&usqp=CAU",
    },
    {
      id: 4,
      data: "Buggati chiron",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-c0G0RBf69lWR2RCV4WHYZgsGTnuppQJ-A&usqp=CAU",
    },
  ];
  return (
    <Stack
      sx={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
        boxShadow: "0px 0px 8px rgba(0,0,0,0.5)",
      }}
    >
      {constant.map((data1) => {
        return (
          <Stack
            sx={{
              cursor: "pointer",
              padding: "10px",
              gap: "10px",
            }}
          >
            <Box
              component="img"
              src={data1.image}
              sx={{
                borderRadius: "1rem",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 300ms ease-in-out",
                },

                boxShadow: "0px 3px 8px RGB(57, 173, 182)",
              }}
            />
            <Typography textAlign={"center"}>{data1.data}</Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Recommendations;
