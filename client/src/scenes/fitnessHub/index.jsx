import React from 'react'
import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material'
import './FitnessHub.css'
import ExerciseDetail from '../../fithubPages/ExerciseDetail.js';
import Home from '../../fithubPages/Home';
import Navbar from '../../fithubComponents/Navbar';
import Footer from 'fithubComponents/Footer';
const App = () => {
    return (
        <Box width = "400px" sx = {{width : {xl : '1488px'}}} m = "auto">
            <Navbar/>
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/exercise/:id" element = {<ExerciseDetail/>}/>
            </Routes>
            <Footer/>
        </Box>
    )
}

export default App