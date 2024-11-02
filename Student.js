import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ position: 'absolute', left: '45%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={${process.env.PUBLIC_URL}/l60Hf.png} // Correct way to reference an image in the public folder
          alt="Description of the image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gnana sekhar
          </Typography>
          <h3 style={{marginTop:"50px",fontWeight:"lighter"}}>ID : 2300080384 
           </h3>
           <h3 style={{fontWeight:"lighter"}}> BRANCH : AI AND DS</h3>
           <h3 style={{fontWeight:"lighter"}}>PH NO : 0000000000</h3>
          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ID : 2300080384 
            BRANCH : AI AND DS
            PH NO : 0000000000
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}