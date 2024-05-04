import React, {useState} from 'react'
import {Box} from '@mui/material'
import Exercises from '../fithubComponents/Exercises'
import HeroBanner from './../fithubComponents/HeroBanner'
import SearchExercises from '../fithubComponents/SearchExercises'
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises
      setExercises = {setExercises}
      bodyPart = {bodyPart}
      setBodyPart = {setBodyPart}
      />
      <Exercises
      setExercises = {setExercises}
      bodyPart = {bodyPart}
      exercises = {exercises}
      />
    </Box>
  )
}

export default Home