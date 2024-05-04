import React from 'react'
import {Link} from 'react-router-dom';
import {Slack, Stack} from '@mui/material';
import logo from '../assets/images/Logo.png'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
const Navbar = () => {
  return (
    <Stack 
      direction = "row"
      justifyContent = "space-around"
      sx = {{gap : {sm : '122px', xs : '40px'}, mt : {sm : '32px', xs : '20px'}, justifyContent : 'none' }} px = "20px"
    >
      <Link to  = "/fitnessHub">
        <FitnessCenterIcon style = {{width : '48px' , height : '48px' , margin : '0 20px'}}/>
      {/* <img src = {logo} alt = "logo" style = {{width : '48px' , height : '48px' , margin : '0 20px'}}></img> */}
      </Link>
      <Stack 
          direction = "row"
          gap = "40px"
          fontSize= "24px"
          alignItems= "flex-end"
      >
        <Link to  ="/fitnessHub" style = {{textDecoration : 'none', color : '#526D82', borderBottom : '3px solid #1E0342'}}>
          Home
        </Link>
        < a href = "#exercise" style = {{textDecoration : 'none', color : '#526D82'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar