import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './skills.css';
// import animation_Data from '../assets/Animation - 1704172677977.json';
// import Lottie from 'lottie-react';

export default function Skills({ mode}) {
  return (

    <section className={`skillMain${mode === 'dark' ? 'dark' : 'light'}`}>
   
 <section className='skill_section'>
<Card id='card' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random/900×700/?HTML"
          alt="HMTL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            HTML
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
    </Card>

    <Card  id='card' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random/900×700/?Css"
          alt="HMTL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Css
          </Typography>
         
        </CardContent>
      </CardActionArea>
      
    </Card>

   

    <Card id='card' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random/900×700/?Bootstrap"
          alt="HMTL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bootstrap
          </Typography>
          
        </CardContent>
      </CardActionArea>
     
    </Card>
    </section>

    <section className='skill_section'>


    <Card id='card' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random/900×700/?JavaScript"
          alt="HMTL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            JavaScript
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
    </Card>


    <Card id='card' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random/900×700/?Reactjs"
          alt="HMTL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React-js
          </Typography>
        
        </CardContent>
      </CardActionArea>
      
    </Card>
    

   
    </section>
    </section>
   
    
    
  );
}
