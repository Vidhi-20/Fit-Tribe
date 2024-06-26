import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import FitnessHub from "scenes/fitnessHub";
import HelpPage from "scenes/helpPage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import ExerciseDetail from "fithubPages/ExerciseDetail";
import FitnessApp from "scenes/fitnessHub/index";
function App() {
  const mode = useSelector((state)=> state.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
  <div className="app">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route 
            path="/home"
            element={isAuth ? <HomePage /> : <Navigate to="/" />}  
          />
          <Route 
            path="/profile/:userId" 
            element={isAuth ? <ProfilePage />:<Navigate to = "/" />} 
          />
          <Route 
            path="/help" 
            element={<HelpPage/>} 
          />
          <Route 
            path="/fitnessHub" 
            element={<FitnessApp/>} 
          />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </div>
  );
}

export default App;
