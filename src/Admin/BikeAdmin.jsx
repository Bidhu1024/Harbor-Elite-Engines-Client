import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
const BikeAdmin = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
              gap: "1.21rem",
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
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Enter the Name of the Bike
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <Typography fontSize="1.2rem">
                Upload the images of the Bike
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size="small" />
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
        <Button variant="contained" sx={{ padding: "5px" }}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default BikeAdmin;
