import { Box } from "@mui/material";
import React from "react";
import ashu from "../Assets/Ashu.jpg";
import gudu from "../Assets/bidhuimg.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import BikeNavbar from "./AllBikes/BikeNavbar";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <>
      <BikeNavbar />
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Card sx={{ maxWidth: 345, mt: "1rem" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image={ashu}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ashutosh Acharya
            </Typography>
            <Typography variant="body2" color="text.secondary">
           Software Engineer at Softsensor.ai
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small">
              Github
            </Button>
            <Button variant="outlined" size="small">
              LinkedIn
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, mt: "1rem" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image={gudu}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Bidhubhushan Gahan
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Software Engineer at Softsensor.ai
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small">
              Github
            </Button>
            <Button variant="outlined" size="small">
              LinkedIn
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default About;
