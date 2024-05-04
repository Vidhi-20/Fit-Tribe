import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.jpeg'
const HeroBanner = () => {
  return (
    <Box
      sx = {{
        mt : {lg : '212px', xs : '70px'},
        ml : {sm : '50px'},
        display: 'flex', // Add this`
        justifyContent: 'space-between', 
      }}
      position={'relative'}
      
      p = "20px"
    >
      {/* Adding the materials for the hero banner Starting with the colors*/}
      <Stack spacing={2}>
          <Typography
                  color = "#1E0342"
                  fontWeight= "600"
                  fontSize= "26px"
                >
                  Fitness Club
                </Typography>
                <Typography
                  color = "black"
                  fontWeight= "700"
                  sx = {{
                  fontSize : {lg : '44px' , xs : '40px'}
                }}
                mb = "23px"
                mt = "30px"
                >
                  Sweat , Smile <br/>
                  Love
                </Typography>
                <Typography
                  color = "#526D82"
                  fontWeight= "600"
                  lineHeight= "35px"
                  mb = "10px"
                  sx = {{
                  fontSize : {lg : '22px' , xs : '10px'}
                }}
                
                >
                  Check Out The Most Efficient Exercises
                </Typography>
                <Button 
                  variant = "contained"
                  color = "error"
                  href = "#exercises"
                  sx = {{backgroundColor : '#1E0342',
                        padding : '10px'
                        }}
                >Explore Exercises</Button>
                <Typography
                  fontWeight = {600}
                  color = '#1E0342'
                  sx = {{
                    opacity : 0.1,
                    display : {lg : 'block', xs : 'none'}
                  }}
                  fontSize= "200px"
                >
                  Exercise
                </Typography>
      </Stack>
      
      <img 
        src = {HeroBannerImage} 
        alt = "bannerImage" 
        className = "hero-banner-img"
        style={{ width: '47%', height: 'auto', borderRadius: '20px' }}
        
      />
    </Box>
  )
}

export default HeroBanner