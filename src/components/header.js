import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './header.css'
import { Link } from 'react-router-dom';

const Navbar = ({HandleMode, mode}) => {
  return (
    <AppBar position="static" className='navbar'>
    <section className= {`nav${mode === 'dark' ? 'dark' : 'light'}`}>
    {/* <button class="button-40" role="button">
  <span class="text" >Mode</span>
</button> */}

<button className="button-32"  onClick={(e)=> HandleMode(e.target)} >
  <span className="text">mode</span>
</button>

    <Toolbar className='innernav'>
        
        <Typography className='nav_cons' variant="h6"> <Link to={"/"}>About</Link></Typography>
        <Typography className='nav_cons' variant="h6"> <Link to={"/project"}>Projects</Link></Typography>
        <Typography className='nav_cons' variant="h6"><Link to={"/skills"}>Skills</Link> </Typography>
        <Typography className='nav_cons' variant="h6"><Link to={"/contact"}>Contact</Link></Typography>
        
        {/* Add more components for navigation links or other elements */}
      </Toolbar>
    </section>
      
    </AppBar>
  );
};

export default Navbar;
