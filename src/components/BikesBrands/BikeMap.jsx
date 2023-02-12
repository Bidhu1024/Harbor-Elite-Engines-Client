import { Box } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const BikeMap = (props) => {
    console.log(props)
  return (
    
    <Card sx={{ maxWidth: 280,height:'100%', display:'flex', flexDirection:'column'}}>
        {props.arr.length !== 0 ?
        props.arr.map((bike)=>{
            return (
            <>
            <CardMedia
        sx={{ height:140, }}
        image={bike.image}
        title="green iguana"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
         {bike.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" >
        On Road Price {bike.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {bike.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More info</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
            </>
            )
        })
         :null}
</Card>
  )
}

export default BikeMap