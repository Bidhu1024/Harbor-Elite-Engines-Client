import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";

const BikeAdmin = () => {
  const [age, setAge] = useState("");
  const [files, setFiles] = useState([]);
  const [brand, setBrand] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [engine, setEngine] = useState("");
  const [weight, setWeight] = useState("");
  const [power, setPower] = useState("");
  const [gear, setGear] = useState("");
  const [speed, setSpeed] = useState("");
  const [fuel, setFuel] = useState("");
  // const [trans, setTrans] = useState("");
  const [desc, setDesc] = useState('')
  const [abs, setAbs] = useState('')


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

  const handleForm = async (e)=>{
    e.preventDefault()
   await axios.post("/allbikes/types",{
      brand,
      name,
      price,
      engine,
      weight,
      gear,
      abs,
      top_speed:speed,
      fuel,
      desc,
      images:files,
    }).then(res=>console.log(res)).catch(error=>console.log(error))
  }

  const { data, isLoading } = useMutation("bikes", handleForm);

  if(data){
    console.log(data)
  }
  //add validation
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleBrand = (e) => {
    setBrand(e.target.value);
    if (e.target.value <= 1) {
      setError("Brand null");
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
    // if (e.target.value <= 4) {
    //   setError("Short Name null");
    // }
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
    // if(e.target.value < 20000){
    //   setError('price')
    // }
  };
  const handleEngine = (e) => {
    setEngine(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };
  const handlePower = (e) => {
    setPower(e.target.value);
  };

  const handlegear = (e) => {
    setGear(e.target.value);
  };

  const handlespeed = (e) => {
    setSpeed(e.target.value);
  };
  const handlefuel = (e) => {
    setFuel(e.target.value);
  };
  // const handletrans = (e) => {
  //   setTrans(e.target.value);
  // };
  const handleDesc = (e)=>{
    setDesc(e.target.value)
  }

    const registerBike=(e)=>{
      e.preventDefault()
    }

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
        <form action="" method="post" autoComplete="off" onSubmit={registerBike}>
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
                // error={error}
                value={brand}
                onChange={handleBrand}
                size="small"
                // helperText={
                //   error === "Brand null" ? "BrandName is required" : ""
                // }
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the Name of the Bike
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                required
                // error={error}
                value={name}
                onChange={handleName}
                // helperText={
                //   error === "Short Name null" ? "Bike Name is required" : ""
                // }
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the Price of the Bike
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                required
                onChange={handlePrice}
                
                value={price}
                // helperText = {error==='price'?"Enter Price":''}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the Engine of the Bike
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                required
                onChange={handleEngine}
                value={engine}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the Weight of the Bike
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                required
                onChange={handleWeight}
                value={weight}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the Max Power of the Bike
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                required
                onChange={handlePower}
                value={power}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the no of gears of the Bike
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                required
                onChange={handlegear}
                value={gear}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the no of ABS channel of the Bike
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size="small" required
                onChange={(e)=>setAbs(e.target.value)}
                value={abs}/>
            
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem"  }}>
              <Typography fontSize="1.2rem">
                Enter the Top Speed of the Bike
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                required
                onChange={handlespeed}
                value={speed}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the Fuel Capacity of the Bike
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                required
                onChange={handlefuel}
                value={fuel}
              />
            </Box>
            {/* <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Engine Transmission Types
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                required
                onChange={handletrans}
                value={trans}
              />
            </Box> */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">Bike Description</Typography>
              <TextField id="outlined-basic" variant="outlined" size="small"  required
                onChange={handleDesc}
                value={desc}/>
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
          onSubmit = {handleForm}
                  >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default BikeAdmin;
