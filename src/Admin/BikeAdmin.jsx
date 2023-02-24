import { Box, Button, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useState } from "react";
const BikeAdmin = () => {
  const [age, setAge] = useState("");
  const [files, setFiles] = useState("");
  const [brand, setBrand] = useState("");
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dtl3zxaep/image/upload",
            data
          );

          const { url } = uploadRes.data;
          console.log(url);
          return url;
        })
      );
      console.log(list);
    } catch (err) {
      console.log(err);
    }
  };
  //add validation
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleBrand = (e) => {
    setBrand(e.target.value);
    setError(!e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value)
    setError(e.target.value.length<=4)
  };
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Typography
        sx={{
          backgroundColor: "orange",
          color: "white",
          display: "flex",
          justifyContent: "center",
          fontFamily: "bolder",
          fontSize: "1.3rem",
        }}
      >
        Welcome to Bike Admin Panel
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#b9e8ed",
        }}
      >
        <form action="" method="post" autoComplete="off">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
              alignItems: "flex-end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
                mt: ".6rem",
              }}
            >
              <Typography fontSize="1.2rem">
                Enter the Brand Name of the Bike
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                required
                error={error}
                value={brand}
                onChange={handleBrand}
                size="small"
                helperText={error ? "BrandName is required" : ""}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the Name of the Bike
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size="small"
              required
              error={error}
                value={name}
                onChange={handleName}
                
                helperText={error ? "Bike Name is required with atleast 4 letters" : ""}
               />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the Price of the Bike
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the Engine of the Bike
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the Weight of the Bike
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the Max Power of the Bike
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the no of gears of the Bike
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the no of ABS channel of the Bike
              </Typography>
              {/* <TextField id="outlined-basic" variant="outlined" size="small" /> */}
              <Box>
                <Select onChange={handleChange} sx={{ width: "222px" }}>
                  <MenuItem value={10}>Single Channel ABS</MenuItem>
                  <MenuItem value={20}>Double Channel ABS</MenuItem>
                </Select>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the Top Speed of the Bike
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the Fuel Capacity of the Bike
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Engine Transmission Types
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">Bike Description</Typography>
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.6rem" }}>
              <Typography fontSize="1.2rem">
                Upload the images of the Bike
              </Typography>
              <Box sx={{ marginLeft: "1rem" }}>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "block" }}
                />
              </Box>
            </Box>
          </Box>
        </form>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          alignItems: "center",
          backgroundColor: "#b9e8ed",
          pt: "5",
        }}
      >
        <Button variant="outlined" sx={{ padding: "5px" }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ padding: "5px" }}
          onClick={handleUpload}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default BikeAdmin;
