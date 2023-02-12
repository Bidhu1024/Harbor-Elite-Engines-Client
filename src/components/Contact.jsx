import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { Box, TextareaAutosize, TextField } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BikeNavbar from "./AllBikes/BikeNavbar";
import ashu from "../Assets/Ashu.jpg";
import gudu from "../Assets/bidhuimg.png";
import { Stack } from "@mui/system";

export default function ImgMediaCard() {
  return (
    <>
      <BikeNavbar />
      <Box
        sx={{
          width: "100vw",
          height: "90vh",
          // background: "red",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            // background: "red",
            width: "80%",
            height: "50vh",
          }}
        >
          <Box
            sx={{
              flex: "2",
            }}
          >
            <Typography variant="h2">Contact Us</Typography>
            <Typography color={"gray"}>
              Need to get in touch with us? <br /> fill the form in with the
              email you would like to contact.
            </Typography>
          </Box>
          <Stack
            sx={{
              flex: "1",
              padding: "10px",
              alignItems: "center",
              gap: "20px",
              boxShadow: "0px 0px 8px rgba(0,0,0,0.4)",
              borderRadius: "10px",
            }}
          >
            <Stack
              direction={"row"}
              sx={{
                justifyContent: "space-between",
                width: "90%",
              }}
            >
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                sx={{
                  width: "47%",
                }}
              />
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                sx={{
                  width: "47%",
                }}
              />
            </Stack>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{
                width: "90%",
              }}
            />

            <textarea
              style={{
                resize: "none",
                width: "89%",
                height: "70px",
                border: "1px solid rgb(217, 217, 217)",
                borderRadius: "5px",
              }}
              placeholder="What Can We Help You with?"
            ></textarea>
            <Button
              variant="contained"
              sx={{
                marginTop: "100px",
              }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
