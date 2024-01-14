import React from 'react'
import './projects.css';
import  logo from '../assets/beboforfolio.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import bebo from '../assets/beboforfolio.png';
import cal from '../assets/calculator.png';
import drum from '../assets/Drum-kit.png';
import simon from '../assets/simon-game.png';


export const Projects = ({ mode}) => {
  const openBeautyBebo=()=>{
    window.open('https://github.com/SANDESHMORE19/Beauty_Bebo','_black')
  }

  const openDrumKit=()=>{
    window.open('https://github.com/SANDESHMORE19/Drum_Kit','_black')
  }

  const openSimon=()=>{
    window.open('https://github.com/SANDESHMORE19/simon_game','_black')
  }
  
  const openCal=()=>{
    window.open('https://github.com/SANDESHMORE19/Calculator','_black')
  }

  const openJsProjects=()=>{
    window.open('https://github.com/SANDESHMORE19/Js_projects','_black')
  }
  
  return (
    <section className={`skillMain${mode === 'dark' ? 'dark' : 'light'}`} >
   
    <section className='skill_section' >
   <Card id='card' sx={{ maxWidth: 345 }}>
         <CardActionArea>
           <CardMedia
             component="img"
             height="140"
             image={bebo}
             onClick={openBeautyBebo}
             alt="beauty-bebo website pic"/>
           <CardContent>
             <Typography gutterBottom variant="h5" component="div" onClick={openBeautyBebo}>
               Beauty-Bebo Clone
             </Typography>
             
           </CardContent>
         </CardActionArea>
         
       </Card>
   

   
       <Card id='card' sx={{ maxWidth: 345 }}>
         <CardActionArea>
           <CardMedia
             component="img"
             height="140"
             image={drum}
             onClick={openDrumKit}
             alt="Drum kit site!"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div" onClick={openDrumKit}>
               Drum-kit 
             </Typography>
             
           </CardContent>
         </CardActionArea>

       </Card>


       <Card id='card' sx={{ maxWidth: 345 }}>
         <CardActionArea>
           <CardMedia
             component="img"
             height="140"
             image={simon}
             onClick={openSimon}
             alt="simon game site"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div"  onClick={openSimon}>
               Simon-Game
             </Typography>
             
           </CardContent>
         </CardActionArea>
         
       </Card>
       </section>
   
       <section className='skill_section'>

       <Card  id='card' sx={{ maxWidth: 345 }}>
         <CardActionArea>
           <CardMedia
             component="img"
             height="140"
             image={cal}
             onClick={openCal}
             alt="calculator"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div" onClick={openCal}>
               Calculator
             </Typography>
            
           </CardContent>
         </CardActionArea>
         
       </Card>
   
   
       <Card id='card' sx={{ maxWidth: 345 }}>
         <CardActionArea>
           <CardMedia
             component="img"
             height="140"
             onClick={openJsProjects}
             image="https://source.unsplash.com/random/900×700/?javascript"
             alt="HMTL"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div"  onClick={openJsProjects}>
               js- projects
             </Typography>
           
           </CardContent>
         </CardActionArea>
         
       </Card>
       
   
      
       </section>
       </section>
  )
}
